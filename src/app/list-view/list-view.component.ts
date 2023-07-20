import { Component } from '@angular/core';

interface TableData {
  name: string;
  age: number;
  country: string;
}

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})
export class ListViewComponent {
  data: TableData[] = [
    { name: 'John Doe', age: 25, country: 'USA' },
    { name: 'Alice Smith', age: 30, country: 'Canada' },
    { name: 'Bob Johnson', age: 22, country: 'Australia' },
    { name:'Ala', age:29, country:'Asia'},
  ];

  sortedData: TableData[] = [...this.data];

  sort(column: keyof TableData) {
    this.sortedData.sort((a, b) => {
      if (a[column] < b[column]) {
        return -1;
      } else if (a[column] > b[column]) {
        return 1;
      } else {
        return 0;
      }
    });
  }
}
