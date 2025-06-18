import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-attribute-dir',
  imports: [CommonModule,FormsModule],
  templateUrl: './attribute-dir.component.html',
  styleUrl: './attribute-dir.component.css'
})
export class AttributeDirComponent {
  divBgColor:string = 'bg-primary';
  isDiv2Active:boolean = false;

  num1:string = '';
  num2:string = ''; 



studentList: any[] = [
{ Id:1, TotalMarks:98, Gender:"male", Name:'Ajay', City:'Ahmedabad', Active:true},
{ Id:2, TotalMarks:78, Gender:"male", Name:'Krishna', City:'Mathura', Active:false},
{ Id:3, TotalMarks:65, Gender:"male", Name:'Raj', City:'Vadodara', Active:true},
{ Id:4, TotalMarks:48, Gender:"female", Name:'Maheshwari', City:'Rishikesh', Active:false},
{ Id:5, TotalMarks:28, Gender:"male", Name:'Shiv', City:'Kailash', Active:true},
]

customStyle:any =
{
  'background-color':'yellow',
  'color':'black',
  'height':'100px',
  'width':'250px',
  'margin-left':'100px'  
};


  addRedClass(){
    this.divBgColor="bg-danger";
  }
  addBlueClass(){
    this.divBgColor="bg-primary";
  }
  toggleDiv2Active(){
    this.isDiv2Active=!this.isDiv2Active;
  }
}