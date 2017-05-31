import { Component, OnInit } from '@angular/core';
import { ReportsService } from "app/shared/services/reports/reports.service";

@Component({
  selector: 'app-activity-summary',
  templateUrl: './activity-summary.component.html',
  styleUrls: ['./activity-summary.component.css']
})
export class ActivitySummaryComponent implements OnInit {

  constructor(private reportsService: ReportsService) { }

  ngOnInit() {
    // subscribe to reportsServiceDeliveries and populate table;
  }

}
