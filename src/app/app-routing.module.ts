import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetalleComponent } from './components/pokemon/detalle/detalle.component';
import { NotFoundComponent } from './components/shared/not-found/not-found.component';
import { HomeComponent } from './components/shared/home/home.component';
import { ManagerComponent } from './components/pokemon/manager/manager.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'pokemones/manager', component: ManagerComponent },
  { path: 'pokemones/detalle', component: DetalleComponent },
  { path: 'pokemones/notfound', component: NotFoundComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'pokemones/notfound' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
