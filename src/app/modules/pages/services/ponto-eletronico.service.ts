import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class PontoEletronicoService {
	set registroName(value: string) {
		localStorage.setItem("registroName", value);
	}

	get registroName() {
		return localStorage.getItem("registroName") ?? "";
	}

	set registroId(value: number) {
		localStorage.setItem("registroId", value.toString());
	}

	get registroId(): number {
		return parseInt(localStorage.getItem("registroId") ?? "");
	}
}
