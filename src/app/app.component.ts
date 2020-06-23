import { Component, OnInit } from '@angular/core';
import { EventEmitterService } from './arquitetura/event/event.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  _menu: Boolean = false;
  _metas: Boolean = false
  
  ngOnInit(): void {
  }
  
  get menu(){
    if(window.location.pathname.includes('auth/login')){
      return false;
    }
    return true
}
  get metas(){
    if(window.location.pathname.includes('metas')){
      return true;
    }
    return false
  }
}
