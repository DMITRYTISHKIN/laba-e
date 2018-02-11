import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SectionService } from '../../section.service';

@Component({
  selector: 'section-item',
  templateUrl: './section-item.component.html',
  styleUrls: [ './section-item.component.css' ]
})
export class SectionItemComponent implements OnInit {
  constructor (
    private _route: ActivatedRoute,
    private _service: SectionService
  ) {}

  public projects = [];

  ngOnInit() {

  }

}
