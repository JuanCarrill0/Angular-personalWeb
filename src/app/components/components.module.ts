import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SobreMiComponent } from './sobre-mi/sobre-mi.component';
import { EducacionComponent } from './educacion/educacion.component';
import { TecnologiasComponent } from './tecnologias/tecnologias.component';
import { HabilidadesComponent } from './habilidades/habilidades.component';



@NgModule({
  declarations: [
    HeaderComponent,
    SobreMiComponent,
    EducacionComponent,
    TecnologiasComponent,
    HabilidadesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    SobreMiComponent,
    EducacionComponent,
    TecnologiasComponent,
    HabilidadesComponent
  ]
})
export class ComponentsModule { }
