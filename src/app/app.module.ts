import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/pages/home/home.component';
import { SearchComponent } from './components/pages/search/search.component';
import { AddContactComponent } from './components/pages/add-contact/add-contact.component';
import { ContactComponent } from './components/utils/contact/contact.component';
import { NavbarComponent } from './components/utils/navbar/navbar.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    AddContactComponent,
    ContactComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
