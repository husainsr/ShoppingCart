import { Component, OnInit } from '@angular/core';
import { EngineService } from '../../shared/services/engine.service';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {
  constructor(private engineService: EngineService) { }

  ngOnInit() {
  }
}
