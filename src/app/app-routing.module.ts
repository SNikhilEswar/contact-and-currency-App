import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConDecComponent } from './cont/con-dec/con-dec.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  { path: 'cont', loadChildren: () => import('./cont/cont.module').then(m => m.ContModule) },
  { path: 'cont/:id', component: ConDecComponent },
  { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'currency', loadChildren: () => import('./currency/currency.module').then(m => m.CurrencyModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
