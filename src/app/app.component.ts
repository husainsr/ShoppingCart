import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { EngineService } from './shared/services/engine.service';
import { Router } from '../../node_modules/@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Caterpillar';
  constructor(private router: Router, private engineService: EngineService) {}

  ngOnInit() {}

  ngOnDestroy(): void {
    this.engineService.removeAll();
  }
}
