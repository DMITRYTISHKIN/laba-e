import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ProjectComponent } from './project.component'
import { ProjectRoutingModule } from './project-routing.module'

@NgModule({
  imports: [
    CommonModule,
    ProjectRoutingModule
  ],
  declarations: [
    ProjectComponent
  ],
})
export class ProjectModule { }
