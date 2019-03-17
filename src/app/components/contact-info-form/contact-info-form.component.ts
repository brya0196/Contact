import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IContact } from '../../interfaces/icontact';
import { Icontactinfo } from '../../interfaces/icontactinfo';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-contact-info-form',
  templateUrl: './contact-info-form.component.html',
  styleUrls: ['./contact-info-form.component.css']
})
export class ContactInfoFormComponent implements OnInit {

  @Input() contactInfo: Icontactinfo
  @Output() addNewContactInfo = new EventEmitter();
  @Output() cleanUpdate = new EventEmitter();

  contactInfoForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.contactInfoForm = this.formBuilder.group({
      name: ['', Validators.required],
      lastname: ['', Validators.required]
    });
    if (!this.contactInfo) this.cleanForm();
  }

  newContact() {
    let contact:IContact = { contactType: null, contact: null };
    this.contactInfo.contacts.push(contact);
  }

  submit() {
    this.submitted = true;

    this.contactInfo.name = this.contactInfoForm.get("name").value;
    this.contactInfo.lastname = this.contactInfoForm.get("lastname").value;

    if (this.contactInfoForm.valid) {
      this.addNewContactInfo.emit(this.contactInfo);
      this.cleanForm();
    }
  }

  cancel() {
    this.cleanForm();
    this.cleanUpdate.emit({ name: null, lastname: null, contacts: [] });
  }

  cleanForm() {
    this.submitted = false;
    let newContact:Icontactinfo = { name: null, lastname: null, contacts: [] };
    this.contactInfo = newContact;
    this.contactInfoForm.setValue({ name: null, lastname: null })
  }

  deleteContact(index: number) {
    this.contactInfo.contacts.splice(index, 1);
  }

  get formControls() { return this.contactInfoForm.controls; }
}
