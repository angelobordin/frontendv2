import { Injectable } from "@angular/core";
import { Knowledge } from "src/util/interface/knowledge";

@Injectable({ providedIn: "root" })
export class KnowledgeApi {
	private readonly knowledgeList: Knowledge[] = [
		{ id: 1, name: "Git" },
		{ id: 2, name: "React" },
		{ id: 3, name: "PHP" },
		{ id: 4, name: "NodeJS" },
		{ id: 5, name: "DevOps" },
		{ id: 6, name: "Banco de Dados" },
		{ id: 7, name: "TypeScript" },
	];

	public get knowledge$(): Knowledge[] {
		return this.knowledgeList;
	}
}
