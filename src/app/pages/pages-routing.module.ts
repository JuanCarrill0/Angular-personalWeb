import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { SobreMiComponent } from './sobre-mi/sobre-mi.component';
import { EducacionComponent } from './educacion/educacion.component';
import { TecnologiasComponent } from './tecnologias/tecnologias.component';
import { HabilidadesComponent } from './habilidades/habilidades.component';
const routes: Routes = [
  {
    path: 'header',
    component: HeaderComponent
  },
  {
    path: 'sobreMi',
    component: SobreMiComponent
  },
  {
    path: 'educacion',
    component: EducacionComponent
  },
  {
    path: 'tecnologias',
    component: TecnologiasComponent
  },
  {
    path: 'habilidades',
    component: HabilidadesComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
