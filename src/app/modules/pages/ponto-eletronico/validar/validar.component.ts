import { Component } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { Subject, takeUntil } from "rxjs";
import { ColaboradorService } from "../../services/colaborador.service";
import { Knowledge } from "src/util/interface/knowledge";
import { PontoEletronicoService } from "../../services/ponto-eletronico.service";
import { KnowledgeApi } from "src/app/__mock__/knowledge";

@Component({
	selector: "app-validar",
	templateUrl: "./validar.component.html",
	styleUrls: ["./validar.component.scss"],
})
export class ValidarComponent {
	form!: FormGroup;
	tasks!: Knowledge[];
	private _unsubscribeAll: Subject<any> = new Subject<any>();

	constructor(
		private formBuilder: FormBuilder,
		private service: ColaboradorService,
		private router: Router,
		private registroService: PontoEletronicoService,
		private toastr: ToastrService,
		private knowledgeApi: KnowledgeApi
	) {}

	ngOnInit(): void {
		this.tasks = this.knowledgeApi.knowledge$;

		this.form = this.formBuilder.group({
			id: [""],
			name: ["", [Validators.required]],
			email: ["", [Validators.required]],
			cpf: ["", [Validators.required]],
			cellphone: [""],
			knowledge: [[], [Validators.required, Validators.minLength(1), Validators.maxLength(3)]],
			createdAt: [""],
			updatedAt: [""],
			validate: [""],
		});

		this.service
			.getRegistroPontoById(this.registroService.registroId)
			.pipe(takeUntil(this._unsubscribeAll))
			.subscribe(
				(res) => {
					this.form.setValue({
						...res.data,
						// knowledge: res.data.mark_knowledge.map((k: any) => k.knowledgeId),
					});
				},
				(err) => {
					this.toastr.error("Registro não encontrado", "Erro ao buscar dados do registro", { timeOut: 3000 });
					this.router.navigate(["/registros"]);
				}
			);
	}
	validate() {
		this.form.patchValue({ validate: true });
		this.toastr.success("Validado", "Registro Validado", { timeOut: 3000 });
	}

	invalidate() {
		this.form.patchValue({ validate: false });
		this.toastr.warning("Invalidado", "Registro Invalidado", { timeOut: 3000 });
	}

	save() {
		this.service
			.updateRegistroPonto(this.form.value)
			.pipe(takeUntil(this._unsubscribeAll))
			.subscribe(
				(res: any) => {
					this.toastr.success("Registro Salvo", res.message, { timeOut: 3000 });
				},
				(err: any) => {
					this.toastr.error("Error", err.message, { timeOut: 3000 });
				}
			);
		this.router.navigate(["/registros"]);
	}
}
