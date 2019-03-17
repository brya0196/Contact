import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ContactCardComponent } from './contact-card/contact-card.component';
import { ContactInfoFormComponent } from './contact-info-form/contact-info-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactFormComponent,
    ContactCardComponent,
    ContactInfoFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
