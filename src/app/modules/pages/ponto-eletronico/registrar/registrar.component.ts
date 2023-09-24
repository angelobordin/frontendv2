import { Component } from "@angular/core";
import { FormGroup, FormBuilder, Validators, FormArray } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { Subject, takeUntil } from "rxjs";
import { ColaboradorService } from "../../services/colaborador.service";
import { Knowledge } from "src/util/interface/knowledge";
import { KnowledgeApi } from "src/app/__mock__/knowledge";
import { Router } from "@angular/router";

@Component({
	selector: "app-registrar",
	templateUrl: "./registrar.component.html",
	styleUrls: ["./registrar.component.scss"],
})
export class RegistrarComponent {
	form!: FormGroup;
	tasks: Knowledge[] = [];
	private _unsubscribeAll: Subject<any> = new Subject<any>();

	constructor(private formBuilder: FormBuilder, private service: ColaboradorService, private toastr: ToastrService, private knowledgeApi: KnowledgeApi, private router: Router) {}

	ngOnInit(): void {
		this.tasks = this.knowledgeApi.knowledge$;

		this.form = this.formBuilder.group({
			name: ["", [Validators.required]],
			email: ["", [Validators.required, Validators.email]],
			cpf: ["", [Validators.required]],
			cellphone: [""],
			knowledge: [[], [Validators.required]],
		});
	}

	registrarPonto() {
		this.service
			.registrarPonto(this.form.value)
			.pipe(takeUntil(this._unsubscribeAll))
			.subscribe(
				(res) => {
					this.toastr.success("Sucesso", res.message, { timeOut: 3000 });
					this.router.navigate(["/registros"]);
				},
				(err) => {
					this.toastr.error("Error", err.message, { timeOut: 3000 });
				}
			);
	}

	selectKnowledge(e: any, t: Knowledge) {
		if (e.checked.length > 0) {
			this.form.patchValue({
				knowledge: [...this.form.value["knowledge"], t],
			});
		} else {
			this.form.value["knowledge"].splice(this.form.value["knowledge"].indexOf(t), 1);
		}
	}
}
