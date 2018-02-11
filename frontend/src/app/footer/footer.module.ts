import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxSmartModalModule, NgxSmartModalService } from 'ngx-smart-modal';
import { SpoilerModule } from '@shared/spoiler';

import { FooterComponent } from './footer.component';
import { FooterDetailsComponent } from './components/footer-details/footer-details.component';
import { FooterContactsComponent } from './components/footer-contacts/footer-contacts.component';
import { FooterCopyrightComponent } from './components/footer-copyright/footer-copyright.component';

@NgModule({
  imports: [
    CommonModule,
    SpoilerModule,
    NgxSmartModalModule.forRoot()
  ],
  exports: [
    FooterComponent
  ],
  declarations: [
    FooterComponent,
    FooterDetailsComponent,
    FooterContactsComponent,
    FooterCopyrightComponent
  ],
  providers: [
    NgxSmartModalService
  ]
})
export class FooterModule { }
