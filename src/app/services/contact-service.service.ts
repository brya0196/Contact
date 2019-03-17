import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IContact } from '../interfaces/icontact';

@Injectable({
  providedIn: 'root'
})
export class ContactServiceService {
  contacts: Array<IContact>;

  constructor(private http: HttpClient) { 
    this.getContact().subscribe(data => {
      console.log(data);
      this.contacts = data;
    });
  }

  public getContact(): Observable<any> {
    return this.http.get("./contact-api.json");
  }
}
