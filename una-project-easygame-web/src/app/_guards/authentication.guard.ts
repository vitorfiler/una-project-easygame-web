import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {

  constructor(
    private _router:Router,
  ){}

  canActivate(): boolean {

    if(!localStorage.getItem('currentUser') || !localStorage.getItem('token')){
      this._router.navigate(['./auth/login'])
      return false;
    }
    return true;
  }


}
