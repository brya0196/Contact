import { Component, OnInit, Input } from '@angular/core';
import { Icontactinfo } from '../../interfaces/icontactinfo';
import { ContactType } from '../../enums/contact-type.enum';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.css']
})
export class ContactCardComponent implements OnInit {

  @Input()
  contactInfo: Icontactinfo

  constructor() { }

  ngOnInit() {
    console.log(this.contactInfo);
  }

  setContactType(type) {
    return ContactType[type];
  }
 
}
