import { Component, OnInit } from "@angular/core";
import { Login } from "src/app/_models/login";
import { HttpClient } from "@angular/common/http";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AppConst } from "src/app/_const/app.const";

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
  private http: HttpClient;
  private _formBuilder: FormBuilder;
  private router: Router;
  constructor() {}

  get f() {
    return this.loginForm.controls;
  }

  async login(username: String, senha: String): Promise<any> {
    const body = { username: username, password: senha };

    let promisse = this.http.post(`${AppConst.URL_API}`, body, { observe: "response" }).toPromise();

    try {
      const response = await promisse;
      localStorage.setItem("currentUser", JSON.stringify(this.user)),
        localStorage.setItem("token", response.body["access_token"]),
        this.router.navigate(["home"]);
    }
    catch (e) {
      return (this.falhaLogin = true);
    }
  }

  ngOnInit(): void {
    // this.loginForm = this._formBuilder.group({
    //   email: ["", [Validators.required]],
    //   password: ["", Validators.required],
    // });
  }
}
