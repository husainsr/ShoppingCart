import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  isSignIn =  true;
  title = 'Caterpillar';
  signupForm: FormGroup;
  constructor(private router: Router) {}

  ngOnInit() {}

  toLogin() {
    this.router.navigate(['']);
  }
}
