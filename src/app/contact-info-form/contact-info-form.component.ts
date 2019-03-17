import { Component, OnInit } from '@angular/core';
import { IContact } from '../interfaces/icontact';

@Component({
  selector: 'app-contact-info-form',
  templateUrl: './contact-info-form.component.html',
  styleUrls: ['./contact-info-form.component.css']
})
export class ContactInfoFormComponent implements OnInit {

  contacts: Array<IContact> = [];

  constructor() { }

  ngOnInit() {
  }

  newContact() {
    let contact:IContact = { contactType: null, contact: null };
    this.contacts = [...this.contacts, contact];
  }
}
