import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LayoutComponent } from "./modules/layout/layout.component";
import { CadastroComponent } from "./modules/pages/colaborador/cadastro/cadastro.component";
import { ListaComponent } from "./modules/pages/ponto-eletronico/lista/lista.component";
import { RegistrarComponent } from "./modules/pages/ponto-eletronico/registrar/registrar.component";

const routes: Routes = [
	{
		path: "",
		component: LayoutComponent,
		children: [
			{
				path: "cadastro",
				component: CadastroComponent,
			},
			{
				path: "registros",
				component: ListaComponent,
			},
		],
	},
	{
		path: ":name",
		component: LayoutComponent,
		children: [
			{
				path: "registrar",
				component: RegistrarComponent,
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
