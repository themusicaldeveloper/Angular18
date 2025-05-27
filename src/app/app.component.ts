import { Component } from '@angular/core';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { StructuralDirComponent } from "./components/directive/structural-dir/structural-dir.component";

@Component({
  selector: 'app-root',
  imports: [DataBindingComponent, StructuralDirComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular18';
}
