import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetalleComponent } from './components/pokemon/detalle/detalle.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/shared/home/home.component';
import { NotFoundComponent } from './components/shared/not-found/not-found.component';
import { ListadoComponent } from './components/pokemon/listado/listado.component';
import { ManagerComponent } from './components/pokemon/manager/manager.component';
import { LoadingComponent } from './components/shared/loading/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    DetalleComponent,
    NavbarComponent,
    HomeComponent,
    NotFoundComponent,
    ListadoComponent,
    ManagerComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
