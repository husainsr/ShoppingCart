import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { EngineService } from './engine.service';

@Injectable()
export class MasterAuthGuard implements CanActivate {

  constructor(
    private engineService: EngineService,
    private router: Router
  ) {}

  canActivate() {
    console.log('--Master Auth Guard ----', this.engineService.getDecryptedKey('isLogged'));
    if (this.engineService.getDecryptedKey('isLogged') == 'true') {
      return true;
    } else {
      this.engineService.setWarnAlert('Login to Continue !');
      this.router.navigate(['']);
      return false;
    }
  }
}
