import { Component } from '@angular/core';

import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
  selector: 'footer-contacts',
  templateUrl: './footer-contacts.component.html',
  styleUrls: [ './footer-contacts.component.css' ]
})
export class FooterContactsComponent {
  constructor (
    public modal: NgxSmartModalService
  ) {}

  public toggleSpoiler: string = 'inactive';

  public onToggleSpoiler(): void {
    this.toggleSpoiler = this.toggleSpoiler === 'inactive' ? 'active' : 'inactive';
  }
}