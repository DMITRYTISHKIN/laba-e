import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SectionService } from '../../section.service';

@Component({
  selector: 'section-nav',
  templateUrl: './section-nav.component.html',
  styleUrls: [ './section-nav.component.css' ]
})
export class SectionNavComponent implements OnInit {
  constructor (
    private _route: ActivatedRoute,
    private _service: SectionService
  ) {}

  public sections = [];

  ngOnInit() {
    this._service.sections$
      .subscribe((sections) => {
        let id = this._route.snapshot.paramMap.get("job");

        sections.forEach((section) => {
          section.ACTIVE = section.JOB_ID === id ? true : false;
        });
        this.sections = sections;
      });
  }

  public goToSection(id: string): void {
    this._service.setSection(id);
  }
}
