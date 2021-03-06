import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { LoginModule } from './main/login/login.module';
import { MatButtonModule, MatIconModule, MatPaginatorModule, MatFormFieldModule, MatInputModule, MatRippleModule, MatTableModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RankingComponent } from './main/ranking/ranking.component';
import {MatMenuModule} from '@angular/material/menu';
import { TarefasComponent } from './main/tarefas/tarefas.component';
import { MenuComponent } from './layout/menu/menu.component';
import { MetasComponent } from './main/metas/metas.component';
import { RecompensasComponent } from './main/recompensas/recompensas.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RankingComponent,
    TarefasComponent,
    MetasComponent,
    RecompensasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    HttpClientModule,
    RouterModule,
    
    // Material
    MatButtonModule,
    MatIconModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatTableModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule,

    //Others
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
