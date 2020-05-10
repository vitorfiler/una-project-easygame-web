import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './main/login/login.component';
import { RankingComponent } from './main/ranking/ranking.component';

const APP_ROUTES: Routes = [
  {path: '', component: LoginComponent},
  {path: 'auth/login', component: LoginComponent},
  {path: 'ranking', component: RankingComponent}
];




@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule],
  providers: [],
})

export class AppRoutingModule { }
