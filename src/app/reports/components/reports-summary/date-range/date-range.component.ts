import { Component, OnInit } from '@angular/core';
import { ReportsService } from "app/shared/services/reports/reports.service";

@Component({
  selector: 'app-date-range',
  templateUrl: './date-range.component.html',
  styleUrls: ['./date-range.component.css']
})
export class DateRangeComponent implements OnInit {

  constructor(private reportsService: ReportsService) { }

  ngOnInit() {
    // subscribe to all endpoint from reportService and handle errors
  }

  ngOnChangeDate(){
    //reportService.RetrieveAllStatistics();
  }

}
