import { Component, OnInit, Input, OnChanges, SimpleChanges, SimpleChange, Output, EventEmitter } from '@angular/core';
import { Icontactinfo } from 'src/app/interfaces/icontactinfo';
import { ContactType } from 'src/app/enums/contact-type.enum';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit, OnChanges {

  @Input() contactsInfo: Array<Icontactinfo>;
  @Output() updateContact = new EventEmitter();

  contactList: Array<Icontactinfo>;


  constructor() { }

  ngOnInit() {
    console.log(this.contactList);
  }

  ngOnChanges(changes: SimpleChanges): void {
    const contactsInfo: SimpleChange = changes.contactsInfo;
    if (contactsInfo.currentValue) this.contactList = [...contactsInfo.currentValue];
  }

  setContactType(type) {
    return ContactType[type];
  }

  setUpdate(contact: Icontactinfo) {
    this.updateContact.emit(contact);
  }

}
