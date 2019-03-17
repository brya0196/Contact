import { Component, OnInit, OnChanges, Input, Output, EventEmitter, SimpleChange, SimpleChanges } from '@angular/core';
import { IContact } from '../../interfaces/icontact';
import { Icontactinfo } from '../../interfaces/icontactinfo';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { IUpdateform } from 'src/app/interfaces/iupdateform';

@Component({
  selector: 'app-contact-info-form',
  templateUrl: './contact-info-form.component.html',
  styleUrls: ['./contact-info-form.component.css']
})
export class ContactInfoFormComponent implements OnChanges, OnInit {

  @Input() contactInfo: Icontactinfo;
  @Input() isUpdate: boolean;
  @Output() addNewContactInfo = new EventEmitter();
  @Output() cleanUpdate = new EventEmitter();

  contactInfoForm: FormGroup;
  contacts: Array<IContact>;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.contactInfoForm = this.formBuilder.group({
      name: ['', Validators.required],
      lastname: ['', Validators.required]
    });
    this.cleanForm();
  }

  ngOnChanges(changes: SimpleChanges) {
    const contactInfo: SimpleChange = changes.contactInfo;
    if (contactInfo.currentValue) {
      this.contactInfoForm.setValue({ name: contactInfo.currentValue.name, lastname: contactInfo.currentValue.lastname });
      this.contacts = JSON.parse( JSON.stringify(contactInfo.currentValue.contacts) );
    }
  }

  get formControls() { return this.contactInfoForm.controls; }

  cleanForm() {
    this.submitted = false;
    const newContact:Icontactinfo = { name: null, lastname: null, contacts: [] };
    this.contactInfoForm.setValue({ name: newContact.name, lastname: newContact.lastname });
    this.contactInfo = newContact;
  }

  submit() {
    this.submitted = true;

    if (this.contactInfoForm.valid) {

      this.contactInfo.name = this.contactInfoForm.get("name").value;
      this.contactInfo.lastname = this.contactInfoForm.get("lastname").value;
      this.contactInfo.contacts = this.contacts;

      console.log(this.isUpdate);
      if (!this.isUpdate) {
        this.addNewContactInfo.emit(this.contactInfo);
      }
      this.cancel();
    }
  }

  cancel() {
    this.cleanForm();
    const clear: IUpdateform = { contact: { name: null, lastname: null, contacts: [] }, isUpdate: false, showForm: false };
    this.cleanUpdate.emit(clear);
  }

  newContact() {
    let contact:IContact = { contactType: null, contact: null };
    this.contacts.push(contact);
  }

  deleteContact(index: number) {
    this.contacts.splice(index, 1);
  }

  
}
