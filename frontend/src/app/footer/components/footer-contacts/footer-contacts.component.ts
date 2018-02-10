import { Component } from '@angular/core';

@Component({
  selector: 'footer-contacts',
  templateUrl: './footer-contacts.component.html',
  styleUrls: [ './footer-contacts.component.css' ]
})
export class FooterContactsComponent {
  public toggleSpoiler: string = 'inactive';

  public onToggleSpoiler(): void {
    debugger
    this.toggleSpoiler = this.toggleSpoiler === 'inactive' ? 'active' : 'inactive';
  }
}