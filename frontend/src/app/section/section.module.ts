import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SectionComponent } from './section.component'
import { SectionRoutingModule } from './section-routing.module'


@NgModule({
  imports: [
    CommonModule,
    SectionRoutingModule
  ],
  declarations: [
    SectionComponent
  ]
})
export class SectionModule { }
