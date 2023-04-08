import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { MenuComponent } from './menu/menu.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ActualizarComponent } from './actualizar/actualizar.component';
import { ConsultarComponent } from './consultar/consultar.component';
import { EliminarComponent } from './eliminar/eliminar.component';
import { InsertarComponent } from './insertar/insertar.component';
import { NgChartsModule } from 'ng2-charts';
import { DashboardComponent } from './dashboard/dashboard.component'; // importa BrowserAnimationsModule



@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    MenuComponent,
    ActualizarComponent,
    ConsultarComponent,
    EliminarComponent,
    InsertarComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule,
    NgChartsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
