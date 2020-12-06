import { ConvertActionBindingResult } from '@angular/compiler/src/compiler_util/expression_converter';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { faTrashAlt, faPen } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  titleText = "# All Contacts";
  faDelete = faTrashAlt;
  faEdit = faPen; 

  contacts = [
    {
      name : "Sourjya",
      number : "9874052864"
    },
    {
      name : "Sam Gonzalvez",
      number : "9874052865"
    },
    {
      name : "Tasmiah",
      number : "98740521234"
    },
    {
      name : "Tillu",
      number : "9874052833"
    },
    {
      name : "Marco Polo",
      number : "7224052864"
    }
  ]

  displayedContacts = [
    {
      name : "Sourjya",
      number : "9874052864"
    },
    {
      name : "Sam Gonzalvez",
      number : "9874052865"
    },
    {
      name : "Tasmiah",
      number : "98740521234"
    },
    {
      name : "Tillu",
      number : "9874052833"
    },
    {
      name : "Marco Polo",
      number : "7224052864"
    }
  ]
  
  searchForm = new FormGroup({
    searchedData : new FormControl()
  }) ;


  constructor() { }

  ngOnInit(): void {
  }

  search(){
    let data = this.searchForm.get("searchedData")?.value;
    console.log(data);
    if(data == "")
      {  
         this.displayedContacts = this.contacts;
        }
    else{  
        for (let i = 0; i < this.displayedContacts.length; i++) {
          let name = this.displayedContacts[i].name;
          if(name.toUpperCase().indexOf(data.toUpperCase()) == -1) {
                this.displayedContacts.splice(i,1);
                 i--;
              }
          
        }
    }
  }

}
