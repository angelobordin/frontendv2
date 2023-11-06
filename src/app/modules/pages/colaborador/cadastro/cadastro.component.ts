import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { Subject, takeUntil } from "rxjs";
import { ColaboradorService } from "../../services/colaborador.service";

@Component({
	selector: "app-cadastro",
	templateUrl: "./cadastro.component.html",
	styleUrls: ["./cadastro.component.scss"],
})
export class CadastroComponent implements OnInit {
	form!: FormGroup;
	enableDialog: boolean = false;
	colaboradorLink: string = "";
	private _unsubscribeAll: Subject<any> = new Subject<any>();

	constructor(private formBuilder: FormBuilder, private service: ColaboradorService, private toastr: ToastrService) {}

	ngOnInit(): void {
		this.form = this.formBuilder.group({
			name: ["", [Validators.required]],
			cpf: ["", [Validators.required]],
		});
	}

	registerColaborator() {
		const cpf = this.form.get("cpf")?.value;
		this.form.patchValue({ cpf: cpf.replaceAll(".", "").replaceAll("-", "") });

		this.service
			.registerColaborator(this.form.value)
			.pipe(takeUntil(this._unsubscribeAll))
			.subscribe(
				(res) => {
					this.form.reset();
					this.enableDialog = true;
					this.colaboradorLink = res.data;
					this.toastr.success("Sucesso", res.message, { timeOut: 3000 });
				},
				(err) => {
					this.toastr.error("Erro", err.error.message, { timeOut: 3000 });
				}
			);
	}
}
