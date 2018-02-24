import { Component, OnInit, OnDestroy, ChangeDetectionStrategy, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Subject } from 'rxjs/Subject';

import { SectionService } from '../../section.service';
import { sectionItem, subSection } from '../../section.model';

@Component({
  selector: 'section-item',
  templateUrl: './section-item.component.html',
  styleUrls: [ './section-item.component.css' ],
})
export class SectionItemComponent implements OnInit, OnDestroy {

  public totalCount = 0;
  public currentPage = 1;
  public perPage = 9;
  public projects: sectionItem[];

  @Input() public currentSection;

  private _destroy$: Subject<null> = new Subject();

  constructor (
    private _route: ActivatedRoute,
    private _service: SectionService
  ) {}

  ngOnInit() {
    this._service.sectionItems$
      .takeUntil(this._destroy$)
      .subscribe((data: sectionItem[]) => {
        this.projects = data;
      });

    this._service.subSections$
      .subscribe((data: subSection[]) => {
        let sub = data.find((item) => item.SECTION_ID === this.currentSection);

      });
  }

  ngOnDestroy() {
    this._destroy$.next();
  }

  public onChangePage(page: number): void {
    console.log(page);
  }
}
