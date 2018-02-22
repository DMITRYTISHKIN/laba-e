import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';

import 'rxjs/add/operator/filter';

import { SectionService } from './section.service';

@Component({
  selector: 'section',
  templateUrl: './section.component.html',
  styleUrls: [ './section.component.css' ]
})
export class SectionComponent implements OnInit {
  constructor (
    private _router: ActivatedRoute,
    private _service: SectionService
  ) {}

  ngOnInit() {
    this._service.fetchSections();
    this._service.fetchSubSections();

    this._router.params.subscribe((data) => {
      this._service.updateState(data);
    });
  }
}
