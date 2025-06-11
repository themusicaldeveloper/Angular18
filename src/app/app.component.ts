import { Component } from '@angular/core';
import { StructuralDirComponent } from "./components/directive/structural-dir/structural-dir.component";
<<<<<<< HEAD
import { AttributeDirComponent } from "./components/directive/attribute-dir/attribute-dir.component";

@Component({
  selector: 'app-root',
  imports: [DataBindingComponent, StructuralDirComponent, AttributeDirComponent],
=======
import { AttributeDirComponent } from './components/directive/attribute-dir/attribute-dir.component';

@Component({
  selector: 'app-root',
  imports: [StructuralDirComponent, AttributeDirComponent],
>>>>>>> b3e7649dfc3d5c2cb18f01e787b1208163fe3b20
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular18';
}
