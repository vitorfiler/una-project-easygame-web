import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnDestroy, OnInit{
  mobileQuery: MediaQueryList;

  fillerNav = Array.from({length: 4}, (_, i) => `Nav Item ${i + 1}`);
  showInNav: any = [
    {nameComponent: "Ranking"},
    {nameComponent: "Tarefas"},
    {nameComponent: "Metas"},
    {nameComponent: "Recompensas"}
  ]

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,
              private router: Router) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }
  ngOnInit(): void {
    this.user = localStorage.getItem('currentUser');
    this.username = JSON.parse(this.user);
    console.log("sd");
  }

  user: any;
  username: any;

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  logOut(){
    localStorage.removeItem('currentUser');
    localStorage.removeItem('token');
    this.router.navigate(['auth/login']);
  }
}

