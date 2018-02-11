import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

import { Observable, BehaviorSubject } from 'rxjs';

import { subSection } from './section.model';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class SectionService {
  constructor(
    private _http: HttpClient,
    private _route: ActivatedRoute,
  ) { }

  private _sections$: BehaviorSubject<any[]> = new BehaviorSubject(null);
  public sections$: Observable<any[]> = this._sections$.asObservable()
    .filter(item => item !== null);

  private _subSections$: BehaviorSubject<subSection[]> = new BehaviorSubject(null);
  public subSections$: Observable<subSection[]> = this._subSections$.asObservable()
    .filter(item => item !== null);

  fetchSections(): void {
    this._http.get('http://laba-e.ru/api/job')
      .subscribe((data: any[]) => {
        let id = this._route.snapshot.paramMap.get('id');
        
        this._sections$.next(data);

        this.fetchSubSections();
      });
  }

  fetchSubSections(): void {
    this._http.get('http://laba-e.ru/api/section')
      .subscribe((data: subSection[]) => {
        this._subSections$.next(data);
      });
  }


  updateSubSections(): void {
    this._subSections$.next(this._subSections$.getValue());
    this._sections$.next(this._sections$.getValue());
  }

  setSection(id: string): void{

  }

  setSubSection(id: string): void{
    let sections = this._subSections$.getValue();
    sections.forEach((section) => {
      if (section.SECTION_ID === id) {
        section.ACTIVE = true;
      } else {
        section.ACTIVE = false
      }
    });

    this._sections$.next(sections);
  }
}