import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Birthday Records';
  peopleList: People[] = [
    {
      name: "Rhianna Johnson",
      birth: "11/30/2011",
    },
    {
      name: "Aiden Shaw",
      birth: "09/16/1992",
    },
    {
      name: "Trevon Floyd",
      birth: "01/16/1992",
    },
    {
      name: "Melanie Yates",
      birth: "12/12/2001",
    },
    {
      name: "Chris Andrews",
      birth: "02/09/1891",
    },
    {
      name: "Jacinda Miller",
      birth: "12/01/1982",
    },
    {
      name: "Will Davis",
      birth: "11/30/2011",
    },
    {
      name: "Eliza Baxter",
      birth: "10/31/1999",
    },
  ]
}

export interface People {
  name: string;
  birth: string;
}
