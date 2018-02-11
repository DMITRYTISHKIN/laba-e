import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SectionService } from '../../section.service';

@Component({
  selector: 'section-nav-sub',
  templateUrl: './section-nav-sub.component.html',
  styleUrls: [ './section-nav-sub.component.css' ]
})
export class SectionNavSubComponent implements OnInit {
  constructor (
    private _route: ActivatedRoute,
    private _service: SectionService
  ) {}

  public sections = [];
  public all = true;

  ngOnInit() {
    this._service.subSections$.subscribe((sections) => {
      let job_id = this._route.snapshot.paramMap.get("job");
      let section_id = this._route.snapshot.paramMap.get("sub");

      this.all = !section_id

      sections.forEach((section) => {
        section.ACTIVE = section.SECTION_ID === section_id ? true : false;
      });
      
      this.sections = sections.filter(section => section.JOB_ID === job_id);

    })
  }

  public getAll() {
    let job_id = this._route.snapshot.paramMap.get("job");
    return ['/section/' + job_id];
  }
}
