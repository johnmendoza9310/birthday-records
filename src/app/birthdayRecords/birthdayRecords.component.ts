import { Component, Input, OnInit } from "@angular/core";
import { People } from "../app.component";

@Component({
  selector: "birthday-records",
  templateUrl: "./birthdayRecords.component.html",
  styleUrls: ["./birthdayRecords.component.scss"],
})
export class BirthdayRecords implements OnInit {
  @Input() peopleList: People[];

  public newPeople = [];

  name = null;
  birth = null;

  ngOnInit() {
    for (let i = 0; i < this.peopleList.length; i++) {
      let result = this.stringToDate(
        this.peopleList[i].birth,
        "dd/MM/yyyy",
        "/"
      );

      this.newPeople.push({ name: this.peopleList[i].name, birth: result });
    }

    console.log("nuevos", this.newPeople);
  }

  stringToDate(_date, _format, _delimiter) {
    var formatLowerCase = _format.toLowerCase();
    var formatItems = formatLowerCase.split(_delimiter);
    var dateItems = _date.split(_delimiter);
    var monthIndex = formatItems.indexOf("mm");
    var dayIndex = formatItems.indexOf("dd");
    var yearIndex = formatItems.indexOf("yyyy");
    var month = parseInt(dateItems[monthIndex]);
    month -= 1;
    var formatedDate = new Date(
      dateItems[yearIndex],
      month,
      dateItems[dayIndex]
    );
    return formatedDate;
  }

  orderByName() {
    this.birth = null;
   
    this.newPeople.sort((a, b) => a.name.localeCompare(b.name));

  }

  orderByBirth() {

    this.name=null;

    this.newPeople.sort(function (a, b) {
      a = new Date(a.birth);
      b = new Date(b.birth);

      return a < b ? -1 : a > b ? 1 : 0;
    });
  }
}
