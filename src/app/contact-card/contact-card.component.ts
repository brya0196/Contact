import { Component, OnInit, Input } from '@angular/core';
import { Icontactinfo } from '../interfaces/icontactinfo';

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

}
