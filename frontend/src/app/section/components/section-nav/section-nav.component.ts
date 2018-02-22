import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Subject } from 'rxjs/Subject';

import { SectionService } from '../../section.service';

@Component({
  selector: 'section-nav',
  templateUrl: './section-nav.component.html',
  styleUrls: [ './section-nav.component.css' ]
})
export class SectionNavComponent implements OnInit {
  private _destroy$: Subject<null> = new Subject();
  public sections = [];

  constructor (
    private _route: ActivatedRoute,
    private _service: SectionService
  ) {}

  ngOnInit() {
    this._service.sections$
      .takeUntil(this._destroy$)
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

  ngOnDestroy() {
    this._destroy$.next();
  }
}
