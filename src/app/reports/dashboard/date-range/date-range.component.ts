import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ReportsService } from "app/shared/services/reports/reports.service";

@Component({
  selector: 'app-date-range',
  templateUrl: './date-range.component.html',
  styleUrls: ['./date-range.component.css']
})
export class DateRangeComponent implements OnInit {
  
  @Output() currentDateRange = new EventEmitter();

  constructor(private reportsService: ReportsService) { }

  ngOnInit() {
    // subscribe to all endpoint from reportService and handle errors
  }

  ngOnChangeDate() {
    let to = new Date();
    let from = new Date(new Date().setDate(to.getDate() - 30));

    this.currentDateRange.emit({ from: from, to: to });
  }
}
