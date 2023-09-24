import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class PontoEletronicoService {
	private _registroName: string = "";

	set registroName(value: string) {
		this._registroName = value;
	}

	get registroName() {
		return this._registroName;
	}
}
