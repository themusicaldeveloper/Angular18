import { Component } from '@angular/core';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { StructuralDirComponent } from "./components/directive/structural-dir/structural-dir.component";
import { AttributeDirComponent } from "./components/directive/attribute-dir/attribute-dir.component";

@Component({
  selector: 'app-root',
  imports: [DataBindingComponent, StructuralDirComponent, AttributeDirComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular18';
}
