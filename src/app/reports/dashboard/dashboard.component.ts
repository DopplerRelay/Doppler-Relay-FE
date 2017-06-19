import { Component, OnInit } from '@angular/core';
import { ReportsService } from "app/shared/services/reports/reports.service";
import { EventItem } from "app/shared/models/event-item";
import { ErrorHandlerService, HandleError } from "app/shared/services/infrastructure/error-handler/error-handler.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  eventsChartData: EventItem[] = [];

  constructor(private reportsService: ReportsService) { }

  ngOnInit() {
  }

  @HandleError()
  updateChildComponents(dateRange: any) {
    this.reportsService.getEventsStatistics(dateRange.from, dateRange.to)
    .subscribe({
      next: response => this.eventsChartData = response,
      error: error => ErrorHandlerService.nextError.next(error)
    });
  }
}
