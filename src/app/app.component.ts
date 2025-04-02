import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AddEmployeeComponent, EmployeeListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular18';
}
