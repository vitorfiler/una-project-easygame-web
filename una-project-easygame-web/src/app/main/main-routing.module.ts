import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthenticationGuard } from '../_guards/authentication.guard';



const mainRoutes: Routes = [
    {
        path: 'home',
        component: HomeComponent,
        canActivate: [AuthenticationGuard]
    },
    {
        path: 'auth/login',
        component: LoginComponent
    },
];

@NgModule({
    imports: [ RouterModule.forChild(mainRoutes)],
    exports: [ RouterModule ],
    providers: [AuthenticationGuard],
})
export class MainRoutingModule { }
