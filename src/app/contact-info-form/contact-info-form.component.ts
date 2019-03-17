import { Component, OnInit, Input, Output } from '@angular/core';
import { IContact } from '../interfaces/icontact';
import { Icontactinfo } from '../interfaces/icontactinfo';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-contact-info-form',
  templateUrl: './contact-info-form.component.html',
  styleUrls: ['./contact-info-form.component.css']
})
export class ContactInfoFormComponent implements OnInit {

  @Input() contactInfo: Icontactinfo

  constructor() {
    
  }

  ngOnInit() {
    if (!this.contactInfo) {
      let newContactInfo:Icontactinfo = { name: null, lastname: null, contacts: [] };
      this.contactInfo = newContactInfo;
    } 
  }

  newContact() {
    let contact:IContact = { contactType: null, contact: null };
    this.contactInfo.contacts.push(contact);
  }

  submit() {
    console.log(this.contactInfo);
  }
}
