import { Component, OnInit } from '@angular/core';
import { ReportsService } from "app/shared/services/reports/reports.service";

@Component({
  selector: 'app-reports-summary',
  templateUrl: './reports-summary.component.html',
  styleUrls: ['./reports-summary.component.css']
})
export class ReportsSummaryComponent implements OnInit {

  constructor(private reportsService: ReportsService) { }

  ngOnInit() {
    // subscribe to reportsServiceActionsStatistics and populate chart;
  }

}
