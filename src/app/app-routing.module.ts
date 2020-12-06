import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddContactComponent } from './components/pages/add-contact/add-contact.component';
import { HomeComponent } from './components/pages/home/home.component';

const routes: Routes = [
                         { path: '', component: HomeComponent },
                         { path: 'home', component: HomeComponent},
                         { path: 'addContact', component: AddContactComponent} 
                       ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
