import { Component, OnInit } from '@angular/core';
import { AlertService } from 'ngx-alerts';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EngineService } from '../../shared/services/engine.service';
import * as crypto from 'crypto-js';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})

export class SignInComponent implements OnInit {

  loginForm: FormGroup;

  loggedIn = false;
  UserName: string;
  Password: string;
  cryptKey: string;

  changeLogoSlide = false;
  userOid = '';

  isRegister = false;

  constructor(
    private spinner: NgxSpinnerService,
    private router: Router,
    private engineService: EngineService
  ) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      Email: new FormControl(null, [Validators.required, this.engineService.emailValidator]),
      Password: new FormControl(null, [this.engineService.noWhitespace, Validators.required]),
      Role: new FormControl(null, [Validators.required])
    });
    this.resetCredentials();
  }

  resetCredentials() {
    this.engineService.removeAll();
  }

  onLogin() {
    this.cryptKey = 1 + 'India';
    this.spinner.show();

    const data = this.loginForm.value;
    this.engineService.signIn(data).then(response => {
      console.log(response);
      this.spinner.hide();
      if (response['status'] == 200) {
        const token = crypto.AES.encrypt(response['data'].user.auth_token, this.cryptKey);
        const valid = crypto.AES.encrypt('true', this.cryptKey);
        this.engineService.put('token', token);
        this.engineService.put('isLogged', valid);
        this.engineService.setSuccessAlert(response['message']);
        this.router.navigate(['/dashboard']);
      } else {
        this.engineService.setErrorAlert(response['message']);
        return;
      }

    }).catch(error => {
        this.spinner.hide();
        this.engineService.playAudio('error.mp3');
        this.engineService.setErrorAlert(error.message);
      });
  }




}
