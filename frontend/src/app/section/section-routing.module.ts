import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SectionComponent } from './section.component';

const routes: Routes = [
  { path: '', component: SectionComponent },
];


export const SectionRoutingModule: ModuleWithProviders = RouterModule.forChild(routes);
