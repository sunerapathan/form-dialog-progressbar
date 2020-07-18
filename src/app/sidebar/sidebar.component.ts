import { Component, OnInit, AfterViewInit, OnChanges } from '@angular/core';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  events: string[] = []; total_count:number=0; male_count:number=0; female_count:number=0;
  opened: boolean; 
  count_details: any;
  constructor() {}

  ngOnInit() { }

  countDetails(value) {
    var maleCount:number=0; var femaleCount :number=0;
    this.count_details = value;
    this.total_count = this.count_details.length;
    this.count_details.forEach(element => {
      if (element.gender === 'Male') {
        maleCount++;
      } else if (element.gender === 'Female') {
        femaleCount++;
      } else {
        console.log('Something Went Wrong');
      }
    });
    this.male_count = maleCount;
    this.female_count = femaleCount;
  }
}
