import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { CookieService } from 'ngx-cookie';
import * as crypto from 'crypto-js';
import { Router } from '@angular/router';
import {
  HttpClient,
  HttpHeaders,
  HttpParameterCodec
} from '@angular/common/http';

import { FormControl, AbstractControl } from '@angular/forms';
import { AlertService } from 'ngx-alerts';

@Injectable()
export class EngineService {

  baseUrl = '/api/';
  loginUrl = 'api/Login/Token';
  httpFormEncodingCodec: HttpFormEncodingCodec;
  audioState = true;
  // Cookie
  cookiePrefix = '';

  private loadingIndicator = new Subject<any>();
  public tabChangeEvent = new Subject<any>();
  public enableAudio = new Subject<any>();

  constructor(
    private httpC: HttpClient,
    private cookieService: CookieService,
    public alertService: AlertService,
    private router: Router
  ) {
    this.updateCookiePrefix();
    this.updateURLs();
    setTimeout(() => {
      const valid = crypto.AES.encrypt('false', 1 + 'India');
      this.put('isLogged', valid);
    }, 1000);
  }

  updateCookiePrefix() {
    let prefix = window.location.origin + window.location.pathname;
    prefix = prefix.split('.').join('');
    prefix = prefix.split(':').join('');
    prefix = prefix.split('/').join('');
    this.cookiePrefix = prefix;
  }

  put(key, value) {
    if (this.cookiePrefix === '') {
      this.updateCookiePrefix();
    }
    const prefixedKey = this.cookiePrefix + key;
    this.cookieService.put(prefixedKey, value);
  }

  get(key) {
    if (this.cookiePrefix === '') {
      this.updateCookiePrefix();
    }
    const prefixedKey = this.cookiePrefix + key;
    return this.cookieService.get(prefixedKey);
  }

  removeAll() {
    const keys = Object.keys(this.cookieService.getAll());
    keys.forEach(key => {
      if (key.indexOf(this.cookiePrefix) !== -1) {
        this.cookieService.remove(key);
      }
    });
    const valid = crypto.AES.encrypt('false', 1 + 'India');
    this.put('isLogged', valid);
  }

  async updateURLs() {
    await this.httpC.get('assets/config/config.txt', {responseType: 'text'})
      .toPromise()
      .then(res => {
        this.baseUrl = res.toString().trim() + this.baseUrl;
        this.loginUrl = res.toString().trim() + this.loginUrl;
      })
      .catch(err => {
      });
  }

 getAudioState(): Observable<any> {
    return this.enableAudio.asObservable();
  }

  setAudioState(state) {
    this.audioState = state;
    this.enableAudio.next(state);
  }

  onTabChange(data) {
    this.tabChangeEvent.next(data);
  }

  signUp(data) {
    const url = this.baseUrl + 'users/sign_up.json';
    const formData: FormData = new FormData();
    formData.append('user[email]', data.Email);
    formData.append('user[password]', data.Password);
    formData.append('user[first_name]', data.FirstName);
    formData.append('user[last_name]', data.LastName);
    formData.append('user[phone]', data.ContactNo);
    formData.append('user[role]', data.Role);
    formData.append('user[gender]', data.Gender);
    formData.append('profile[date_of_birth]', data.dob);
    formData.append('device_detail[device_type]', 'web');
    formData.append('device_detail[player_id]', '');

    return this.httpC.post(url, formData).toPromise();
  }

  signIn(data) {
    const url = this.baseUrl + 'users/sign_in.json';
    const formData: FormData = new FormData();
    formData.append('user[email]', data.Email);
    formData.append('user[password]', data.Password);
    formData.append('role', data.Role);
    formData.append('device_detail[device_type]', 'web');
    formData.append('device_detail[player_id]', '');

    return this.httpC.post(url, formData).toPromise();
  }

  logOut() {
    const token = this.getDecryptedKey('token');
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods':
        'GET, POST, PATCH, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
        Allow: 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
        AUTH_TOKEN: token
      })
    };

    const url = this.baseUrl + 'users/sign_out.json';
    return this.httpC.delete(url, httpOptions).toPromise();
  }


  getDecryptedKey(key) {
    const Decrypt = crypto.AES.decrypt(
      this.get(key),
      1 + 'India'
    );
    return Decrypt.toString(crypto.enc.Utf8);
  }

  setLoadingIndicator(status: boolean) {
    this.loadingIndicator.next(status);
  }

  getLoadingIndicator() {
    return this.loadingIndicator.asObservable();
  }

  noWhitespace(control: FormControl) {
    const isWhitespace = (control.value || '').toString().trim().length === 0;
    // const isWhitespace = (control.value || '').trim().length === 0;
    const isValid = !isWhitespace;
    return isValid ? null : { whitespace: true };
  }
  emailValidator(control: AbstractControl): { [key: string]: boolean } | null {
    if ((control.value || '').trim().length > 0) {
      // if (/[a-zA-Z0-9._-]+@[a-z0-9_-]+[.]{1}[a-z.]{2,5}/.test(control.value)) {
      //   return null;
      // }
      if (/^ *([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,6}) *$/.test(control.value)) {
        return null;
      }

      return { emailValidation: true };
    }
    return null;
  }

  mobileNumber(control: AbstractControl): { [key: string]: boolean } | null {
    if (control.value !== null && String(control.value).length > 0) {
      const pattern = new RegExp(/^[0-9]{10}$/);
      if (pattern.test(control.value)) {
        return null;
      }
      return { mobileValidation: true };
    }
    return null;
  }

  goToDashboard() {
    this.router.navigate(['/dashboard']);
  }

  playAudio(fileName) {
    try {
      if (this.audioState) {
        const audio = new Audio();
        audio.src = 'assets/audio/' + fileName;
        audio.load();
        audio.play();
      }
    } catch (e) {}
  }


  setWarnAlert(msg) {
    this.alertService.warning(msg);
  }

  setSuccessAlert(msg) {
    this.alertService.success(msg);
  }

  setErrorAlert(msg) {
    this.alertService.danger(msg);
  }

}

export class HttpFormEncodingCodec implements HttpParameterCodec {
  encodeKey(k: string): string {
    return encodeURIComponent(k).replace(/%20/g, '+');
  }

  encodeValue(v: string): string {
    return encodeURIComponent(v).replace(/%20/g, '+');
  }

  decodeKey(k: string): string {
    return decodeURIComponent(k.replace(/\+/g, ' '));
  }

  decodeValue(v: string): any {
    return decodeURIComponent(v.replace(/\+/g, ' '));
  }
}
