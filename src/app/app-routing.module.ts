import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LayoutComponent } from "./modules/layout/layout.component";
import { CadastroComponent } from "./modules/pages/colaborador/cadastro/cadastro.component";

const routes: Routes = [
	{
		path: "",
		component: LayoutComponent,
		children: [
			{
				path: "cadastro",
				component: CadastroComponent,
			},
		],
	},
	{ path: "**", redirectTo: "" },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
