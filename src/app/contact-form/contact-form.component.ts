import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ContactType } from '../enums/contact-type.enum';
import { IContact } from '../interfaces/icontact';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  @Input() contact: IContact

  contactTypes : Array<string> = [];

  constructor() { 
    console.log(this.contact);
    this.contactTypes = [...this.contactTypesFormater()];
  }

  ngOnInit() {
  }

  contactTypesFormater() : Array<string> {
    var keys = Object.keys(ContactType);
    return keys.slice(keys.length / 2);
  }

  
}
