import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './main/login/login.component';
import { HomeComponent } from './main/home/home.component';

const routes: Routes = [
  {path:'', component: LoginComponent}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
})

export class AppRoutingModule { }
