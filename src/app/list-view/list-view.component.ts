import { Component } from '@angular/core';

interface TableData {
  name: string;
  age: number;
  country: string;
  date:Date;
}

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})
export class ListViewComponent {
  data: TableData[] = [
    { name: 'James', age: 25, country: 'USA', date:new Date('1-2-2022') },
    { name: 'Anusha', age: 30, country: 'Canada' , date:new Date('8-2-2021')},
    { name: 'Zob harry', age: 22, country: 'Australia', date:new Date('3-5-2024') },
    { name:'Babu', age:29, country:'Asia', date:new Date('4-11-2005')},
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
