import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatIconModule, MatInputModule } from '@angular/material';


import { LoginComponent } from '../../main/login/login.component';
import { HttpClient } from '@angular/common/http';

@NgModule({
    declarations: [
        LoginComponent
    ],
    imports     : [
        MatButtonModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        HttpClient
    ]
})
export class LoginModule
{
}
