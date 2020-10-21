import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EngineService } from '../../shared/services/engine.service';
import { NgxSpinnerService } from 'ngx-spinner';
import * as moment from 'moment';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})

export class SignUpComponent implements OnInit {

  signupForm: FormGroup;
  isRegister = false;

  constructor(
    private spinner: NgxSpinnerService,
    private router: Router,
    private engineService: EngineService
  ) { }

  ngOnInit() {
    this.signupForm = new FormGroup({
      Email: new FormControl(null, [Validators.required, this.engineService.emailValidator]),
      FirstName: new FormControl(null, [Validators.required]),
      LastName: new FormControl(null, [Validators.required]),
      ContactNo: new FormControl(null, [Validators.required]),
      Role: new FormControl(null, [Validators.required]),
      Gender: new FormControl(null, [Validators.required]),
      DOB: new FormControl(null, [Validators.required]),
      Password: new FormControl(null, [Validators.required]),
      dob: new FormControl('')
    });
  }


  onSignUp() {
    this.spinner.show();
    this.signupForm.patchValue({
      dob: moment(this.signupForm.get('DOB').value).format('DD/MM/YYYY hh:mm:ss')
    });
    const data = this.signupForm.value;
    this.engineService.signUp(data).then(response => {
      this.spinner.hide();
      if (response['status'] == 200) {
        this.engineService.setSuccessAlert(response['message']);
      this.router.navigate(['']);
      } else {
        this.engineService.setErrorAlert(response['message']);
        return;
      }

    })
      .catch(error => {
        this.spinner.hide();
        this.engineService.playAudio('error.mp3');
        this.engineService.setErrorAlert(error.message);
      });
  }

}
