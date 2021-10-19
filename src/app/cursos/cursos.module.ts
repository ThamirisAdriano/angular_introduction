import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosComponent } from './cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { ProviderAst } from '@angular/compiler';
import { CursosService } from './cursos.service';



@NgModule({
  declarations: [
    CursosComponent,
    CursoDetalheComponent
  ],
  imports: [
    CommonModule //módulo de funcionalidade não importa browser module, importa esse
  ],
  exports: [
    CursosComponent //expõe essa classe para outros módulos
  ],
  providers: [CursosService]
})
export class CursosModule { }
