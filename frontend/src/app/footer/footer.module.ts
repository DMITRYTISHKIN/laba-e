import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpoilerModule } from '@shared/spoiler';

import { FooterComponent } from './footer.component';
import { FooterDetailsComponent } from './components/footer-details/footer-details.component';
import { FooterContactsComponent } from './components/footer-contacts/footer-contacts.component';
import { FooterCopyrightComponent } from './components/footer-copyright/footer-copyright.component';

@NgModule({
  imports: [
    CommonModule,
    SpoilerModule
  ],
  exports: [
    FooterComponent
  ],
  declarations: [
    FooterComponent,
    FooterDetailsComponent,
    FooterContactsComponent,
    FooterCopyrightComponent
  ]
})
export class FooterModule { }
