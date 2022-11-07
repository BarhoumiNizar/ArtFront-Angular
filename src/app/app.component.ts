import { Component } from '@angular/core';
import demodata from '../assets/demo.json';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Art Front';
  Players: any = demodata
}
