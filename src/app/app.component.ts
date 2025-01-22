import {Component} from '@angular/core';
import { DataBindingComponent } from './data-binding/data-binding.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DataBindingComponent ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
      title = 'homes'
}