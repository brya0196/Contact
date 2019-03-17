import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { HttpClientModule } from '@angular/common/http';

// material
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContactCardComponent } from './contact-card/contact-card.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactFormComponent,
    ContactCardComponent
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
