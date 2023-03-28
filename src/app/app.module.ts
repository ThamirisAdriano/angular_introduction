import { NgModule } from '@angular/core'; //
import { FormsModule } from '@angular/forms'; //formulários
import { BrowserModule } from '@angular/platform-browser'; //prepara a aplicação para ser executada em um browser

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'; 
import { MeuPrimeiroComponent } from './meu-primeiro/meu-primeiro.component';
import { MeuPrimeiro2Component } from './meu-primeiro2/meu-primeiro2.component';

import { CursosModule } from './cursos/cursos.module';
import { DataBindingComponent } from './data-binding/data-binding.component';



@NgModule({ // essa classe representa um módulo, decorator ngmodule (importado)
  declarations: [ //listar componentes, diretivas e pipes que vamos utilizar no projeto
    AppComponent, 
    MeuPrimeiroComponent,
    MeuPrimeiro2Component,
    DataBindingComponent,
  ],
  imports: [ //metadado de imports, colocamos outros módulos importados
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CursosModule
    
  ],
  providers: [], //onde colocamos os serviços que ficarão disponíveis para os componentes declarados 
  bootstrap: [AppComponent] //escopo global da aplicação 
  
})
export class AppModule { } //declaração da classe
