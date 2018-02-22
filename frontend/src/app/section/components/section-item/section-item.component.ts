import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Subject } from 'rxjs/Subject';

import { SectionService } from '../../section.service';
import { sectionItem } from '../../section.model';

@Component({
  selector: 'section-item',
  templateUrl: './section-item.component.html',
  styleUrls: [ './section-item.component.css' ],
})
export class SectionItemComponent implements OnInit, OnDestroy {
  private _destroy$: Subject<null> = new Subject();

  public projects: sectionItem[];

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
  }

  ngOnDestroy() {
    this._destroy$.next();
  }

}
