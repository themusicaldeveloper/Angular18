import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-structural-dir',
  imports: [CommonModule,FormsModule],
  templateUrl: './structural-dir.component.html',
  styleUrl: './structural-dir.component.css'
})
export class StructuralDirComponent {
  
  isDiv1Visibe : boolean = true;
  isDiv2Visibe : boolean = true;

  num1:string = '';
  num2:string = '';

  isDiv3Visible: boolean=true;

  isActive: boolean=false;


 cityArray: string[] = ["Ahmedabad","Vadodara","Rajkot","Surat","Bhavnagar","Jamnagar","Mehsana","Palanpur","Ananad","Vapi"]

studentList: any[] = [
{ Id:1, Name:'Ajay', City:'Ahmedabad', Active:true},
{ Id:2, Name:'Krishna', City:'Mathura', Active:false},
{ Id:3, Name:'Raj', City:'Vadodara', Active:true},
{ Id:4, Name:'Mahesh', City:'Rishikesh', Active:false},
{ Id:5, Name:'Shiv', City:'Kailash', Active:true},
]


getActiveStudents()
{
  return this.studentList.filter(item => item.Active);
}

  showDiv1(){
    this.isDiv1Visibe=true;
  }

  hideDiv1(){
    this.isDiv1Visibe=false;
  }  

  toggleDiv2(){
    this.isDiv2Visibe=!this.isDiv2Visibe;
  }

  div3Visibility()
  {
    return this.num1==this.num2;
  }

}
