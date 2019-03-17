import { Component, OnInit } from '@angular/core';
import { ContactService } from '../services/contact.service';
import { Icontactinfo } from '../interfaces/icontactinfo';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contactsInfo: Array<Icontactinfo>

  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.contactService.getContact().subscribe(data => {
      this.contactsInfo =  [...data];
      console.log(this.contactsInfo);
    });
  }

}
