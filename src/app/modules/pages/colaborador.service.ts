import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, tap } from "rxjs";
import { Colaborator } from "src/util/interface/colaborator";
import { CustomerBackendReturn } from "src/util/interface/customer-backend-return";
import { ROUTE_USER_REGISTER, ROUTE_PONTO_REGISTER, ROUTE_REGISTROS_LIST, ROUTE_REGISTRO_BY_NAME, ROUTE_REGISTRO_UPDATE_BY_ID } from "src/util/routes/colaborador.routes";

@Injectable({
	providedIn: "root",
})
export class ColaboradorService {
	constructor(private httpClient: HttpClient) {}

	registerColaborator(colaborator: Colaborator): Observable<CustomerBackendReturn<any>> {
		return this.httpClient.post<CustomerBackendReturn<any>>(ROUTE_USER_REGISTER(), colaborator).pipe(
			tap((res) => {
				return res;
			})
		);
	}

	registrarPonto(colaborador: Colaborator): Observable<CustomerBackendReturn<any>> {
		return this.httpClient.post<CustomerBackendReturn<any>>(ROUTE_PONTO_REGISTER(colaborador.name), colaborador).pipe(
			tap((res) => {
				return res;
			})
		);
	}

	getRegistrosList(): Observable<CustomerBackendReturn<any>> {
		return this.httpClient.get<CustomerBackendReturn<any>>(ROUTE_REGISTROS_LIST()).pipe(
			tap((res) => {
				return res;
			})
		);
	}

	getRegistroPontoByName(name: string): Observable<CustomerBackendReturn<any>> {
		return this.httpClient.get<CustomerBackendReturn<any>>(ROUTE_REGISTRO_BY_NAME(name)).pipe(
			tap((res) => {
				return res;
			})
		);
	}

	updateRegistroPonto(registro: any): Observable<CustomerBackendReturn<any>> {
		return this.httpClient.put<CustomerBackendReturn<any>>(ROUTE_REGISTRO_UPDATE_BY_ID(registro.id), registro).pipe(
			tap((res) => {
				return res;
			})
		);
	}
}
