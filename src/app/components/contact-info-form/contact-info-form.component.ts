import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IContact } from '../../interfaces/icontact';
import { Icontactinfo } from '../../interfaces/icontactinfo';

@Component({
  selector: 'app-contact-info-form',
  templateUrl: './contact-info-form.component.html',
  styleUrls: ['./contact-info-form.component.css']
})
export class ContactInfoFormComponent implements OnInit {

  @Input() contactInfo: Icontactinfo
  @Output() addNewContactInfo = new EventEmitter();
  @Output() cleanUpdate = new EventEmitter();

  constructor() {
    
  }

  ngOnInit() {
    if (!this.contactInfo) this.cleanForm();
  }

  newContact() {
    let contact:IContact = { contactType: null, contact: null };
    this.contactInfo.contacts.push(contact);
  }

  submit() {
    this.addNewContactInfo.emit(this.contactInfo);
    this.cleanForm();
  }

  cancel() {
    this.cleanForm();
    this.cleanUpdate.emit({ name: null, lastname: null, contacts: [] });
  }

  cleanForm() {
    let newContact:Icontactinfo = { name: null, lastname: null, contacts: [] };
    this.contactInfo = newContact;
  }

  deleteContact(index: number) {
    this.contactInfo.contacts.splice(index, 1);
  }
}
