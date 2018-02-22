import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SectionComponent } from './section.component';
import { SectionNavComponent } from './components/section-nav/section-nav.component';
import { SectionNavSubComponent } from './components/section-nav-sub/section-nav-sub.component';
import { SectionItemComponent } from './components/section-item/section-item.component';
import { SectionRoutingModule } from './section-routing.module';
import { SectionService } from './section.service';

@NgModule({
  imports: [
    CommonModule,
    SectionRoutingModule
  ],
  declarations: [
    SectionComponent,
    SectionNavComponent,
    SectionNavSubComponent,
    SectionItemComponent
  ],
  providers: [
    SectionService
  ]
})
export class SectionModule { }
