import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/_models/login';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  user = new Login();
  falhaLogin: boolean = false;


  /**
   * Constructor
   *
   * @param {FuseConfigService} _fuseConfigService
   * @param {FormBuilder} _formBuilder
   */
  private http: HttpClient;
  private _formBuilder: FormBuilder;
  private router: Router;
  constructor( ) {}
    ngOnInit(): void {
        throw new Error("Method not implemented.");
    }

  //get f() { return this.loginForm.controls; }

//   login(username: String, senha: String): Promise<any> {
//       const body =
//           {'username': username, 'password': senha};

//       let promisse = this.http.post(`http://localhost:8081/auth/login`, body, {observe: 'response'})
//           .toPromise();

//       return promisse
//           .then(response => {
//               localStorage.setItem('currentUser', JSON.stringify(this.user)),
//                   localStorage.setItem('token', response.body['access_token']),
//                   this.router.navigate(['home']);
//           })
//           .catch(
//               () => this.falhaLogin = true
//           );
//   }

  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
//   ngOnInit(): void {
//       this.loginForm = this._formBuilder.group({
//           email: ['', [Validators.required]],
//           password: ['', Validators.required]
//       });
//   }
}

