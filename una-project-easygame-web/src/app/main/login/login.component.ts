import { Component, OnInit } from "@angular/core";
import { Login } from "src/app/_models/login";
import { HttpClient } from "@angular/common/http";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AppConst } from "src/app/_const/app.const";
import { EventEmitterService } from 'src/app/arquitetura/event/event.service';

@Component({
  selector: "login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
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
  
  
  
  constructor(private http: HttpClient,
              private router: Router) {}

  get f() {
    return this.loginForm.controls;
  }
  
  login(username: String, password: String): Promise<any> {
    const body = 
        {'username': username, 'password': password};

    let promisse = this.http.post(`${AppConst.URL_API}`, body, { observe: "response" })
      .toPromise();

    return promisse
        .then(response => {
            localStorage.setItem('currentUser', JSON.stringify(this.user)),
            EventEmitterService.get('login').emit(true);
                localStorage.setItem('token', response.body['access_token']),
                this.router.navigate(['ranking']);
    })
    .catch(
        () => this.falhaLogin = true
    );
  }

  ngOnInit(): void {
    // this.loginForm = this._formBuilder.group({
    //   email: ["", [Validators.required]],
    //   password: ["", Validators.required],
    // });
  }
}
