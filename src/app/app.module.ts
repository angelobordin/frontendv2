import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { ToastrModule } from "ngx-toastr";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LayoutComponent } from "./modules/layout/layout.component";
import { CadastroComponent } from "./modules/pages/colaborador/cadastro/cadastro.component";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from "ngx-mask";
import { ListaComponent } from "./modules/pages/ponto-eletronico/lista/lista.component";
import { TableModule } from "primeng/table";
import { RegistrarComponent } from './modules/pages/ponto-eletronico/registrar/registrar.component';

@NgModule({
	declarations: [AppComponent, LayoutComponent, CadastroComponent, ListaComponent, RegistrarComponent],
	imports: [
		NgxMaskDirective,
		NgxMaskPipe,
		BrowserModule,
		BrowserAnimationsModule,
		AppRoutingModule,
		ToastrModule.forRoot(),
		FormsModule,
		HttpClientModule,
		ReactiveFormsModule,
		CommonModule,
		TableModule,
	],
	providers: [provideNgxMask()],
	bootstrap: [AppComponent],
})
export class AppModule {}
