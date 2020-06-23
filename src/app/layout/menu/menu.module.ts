import { NgModule } from '@angular/core';
import { MenuComponent } from './menu.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
    declarations: [
        MenuComponent
    ],
    imports     : [
        MatToolbarModule,
        BrowserAnimationsModule
    ]
})
export class MenuModule
{
}
