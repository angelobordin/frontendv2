import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, tap } from "rxjs";
import { Colaborator } from "src/util/interface/colaborator";
import { CustomerBackendReturn } from "src/util/interface/customer-backend-return";
import { ROUTE_USER_REGISTER, ROUTE_PONTO_REGISTER, ROUTE_REGISTROS_LIST, ROUTE_REGISTRO_UPDATE_BY_ID, ROUTE_REGISTRO_BY_NAME } from "src/util/routes/colaborador.routes";
import { PontoEletronico } from "src/util/interface/ponot-eletronico";

@Injectable({
	providedIn: "root",
})
export class ColaboradorService {
	constructor(private httpClient: HttpClient) {}

	registerColaborator(colaborator: Colaborator): Observable<CustomerBackendReturn<string>> {
		return this.httpClient.post<CustomerBackendReturn<string>>(ROUTE_USER_REGISTER(), colaborator).pipe(
			tap((res) => {
				return res;
			})
		);
	}

	registrarPonto(colaborador: Colaborator): Observable<CustomerBackendReturn<PontoEletronico>> {
		return this.httpClient.post<CustomerBackendReturn<PontoEletronico>>(ROUTE_PONTO_REGISTER(colaborador.name), colaborador).pipe(
			tap((res) => {
				return res;
			})
		);
	}

	getRegistrosList(): Observable<CustomerBackendReturn<PontoEletronico[]>> {
		return this.httpClient.get<CustomerBackendReturn<PontoEletronico[]>>(ROUTE_REGISTROS_LIST()).pipe(
			tap((res) => {
				return res;
			})
		);
	}

	getRegistroPontoById(id: number): Observable<CustomerBackendReturn<PontoEletronico>> {
		return this.httpClient.post<CustomerBackendReturn<PontoEletronico>>(ROUTE_REGISTRO_BY_NAME(localStorage.getItem("registroName") ?? ""), { id }).pipe(
			tap((res) => {
				return res;
			})
		);
	}

	updateRegistroPonto(registro: PontoEletronico): Observable<CustomerBackendReturn<PontoEletronico>> {
		return this.httpClient.put<CustomerBackendReturn<PontoEletronico>>(ROUTE_REGISTRO_UPDATE_BY_ID(registro.id), registro).pipe(
			tap((res) => {
				localStorage.removeItem("registroName");
				localStorage.removeItem("registroId");
				return res;
			})
		);
	}
}
