import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Subject, takeUntil } from "rxjs";
import { PontoEletronicoService } from "../../services/ponto-eletronico.service";
import { ColaboradorService } from "../../services/colaborador.service";
import { PontoEletronico } from "src/util/interface/ponot-eletronico";

@Component({
	selector: "app-lista",
	templateUrl: "./lista.component.html",
	styleUrls: ["./lista.component.scss"],
})
export class ListaComponent {
	registros: PontoEletronico[] = [];
	loading: boolean = true;
	private _unsubscribeAll: Subject<any> = new Subject<any>();

	constructor(private service: ColaboradorService, private router: Router, private registroService: PontoEletronicoService) {}

	ngOnInit(): void {
		this.service
			.getRegistrosList()
			.pipe(takeUntil(this._unsubscribeAll))
			.subscribe((res) => {
				this.registros = res.data;
				this.loading = false;
			});
	}

	editRegistro(e: any) {
		this.registroService.registroId = e.id;
		this.registroService.registroName = e.name;
		this.router.navigate([`/${e.name.toString().replaceAll(" ", "-").toLowerCase()}/validar`]);
	}
}
