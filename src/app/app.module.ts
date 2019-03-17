import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { ContactCardComponent } from './components/contact-card/contact-card.component';
import { ContactInfoFormComponent } from './components/contact-info-form/contact-info-form.component';
import { ContactsComponent } from './components/contacts/contacts.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactFormComponent,
    ContactCardComponent,
    ContactInfoFormComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
