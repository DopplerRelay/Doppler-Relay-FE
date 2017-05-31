import { Component, OnInit } from '@angular/core';
import { ReportsService } from "app/shared/services/reports/reports.service";

@Component({
  selector: 'app-actions-chart',
  templateUrl: './actions-chart.component.html',
  styleUrls: ['./actions-chart.component.css']
})
export class ActionsChartComponent implements OnInit {

  constructor(private reportsService: ReportsService) { }

  ngOnInit() {
    // subscribe to reportsServiceActionsStatistics and populate chart;
  }
  
}
