import { Component, signal } from '@angular/core';
import { NgModule  } from '@angular/core';
import { FormsModule   } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
 
  courseName:string = "Angular 18";
  inputType = "checkbox";
  myClassName:string = "bg-primary";
  stateName:string = "Gujarat";

  firstName = signal("Ajay Solanki");

  constructor(){
    //this.inputType="textbox";
    

  }

  showMessage(message:string)
  {
    console.error(message)
    alert(message)
  }

  changeCourseName(){  
    this.courseName = "React Native";
    this.firstName.set("Vijay");
  }
}
