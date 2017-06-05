import { Component, OnInit } from '@angular/core';
import { ReportsService } from "app/shared/services/reports/reports.service";
import { EventItem } from "app/shared/models/event-item";

@Component({
  selector: 'app-reports-summary',
  templateUrl: './reports-summary.component.html',
  styleUrls: ['./reports-summary.component.css']
})
export class ReportsSummaryComponent implements OnInit {

  eventsChartData: EventItem[] = [];

  constructor(private reportsService: ReportsService) { }

  ngOnInit() {
  }

  updateChildComponents(dateRange: any) {
    this.reportsService.getEventsStatistics(dateRange.from, dateRange.to)
    .subscribe(response => {
      this.eventsChartData = response;
    });
  }

}
