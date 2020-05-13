import { Component, OnInit } from '@angular/core';
import { EventEmitterService } from './arquitetura/event/event.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  _showMenu: Boolean = false;
  
  ngOnInit(): void {
  }
  
  get showMenu(){
    if(window.location.pathname.includes('auth/login')){
        return false;
    }
    return true
}
}
