import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import {MenuComponent} from './menu/menu.component'
import {ConsultarComponent} from './consultar/consultar.component'
import {InsertarComponent} from './insertar/insertar.component'
import {ActualizarComponent} from './actualizar/actualizar.component'
import {EliminarComponent} from './eliminar/eliminar.component'
import {DashboardComponent} from './dashboard/dashboard.component'


const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'consultar', component: ConsultarComponent },
  { path: 'insertar', component: InsertarComponent },
  { path: 'actualizar', component: ActualizarComponent },
  { path: 'eliminar', component: EliminarComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'menu', component: MenuComponent },
  { path: '', redirectTo: 'inicio', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
