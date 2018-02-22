import { Component } from '@angular/core';

import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
  selector: 'footer-details',
  templateUrl: './footer-details.component.html',
  styleUrls: [ './footer-details.component.css' ]
})
export class FooterDetailsComponent {
  constructor (
    public modal: NgxSmartModalService
  ) {}
}
