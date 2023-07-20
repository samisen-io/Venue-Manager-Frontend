import { Component } from '@angular/core';

interface TableData {
  name: string;
  age: number;
  country: string;
} 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'space_management';
}
