import { Component, OnInit } from '@angular/core';
import { ReportsService } from "app/shared/services/reports/reports.service";
import { EventItem } from "app/shared/models/event-item";
import { ErrorHandlerService } from "app/shared/services/infrastructure/error-handler/error-handler.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  eventsChartData: EventItem[] = [];

  constructor(private reportsService: ReportsService, private errorHandlerService: ErrorHandlerService) { }

  ngOnInit() {
  }

  updateChildComponents(dateRange: any) {
    
    this.errorHandlerService.executeSafely(() => {
      this.reportsService.getEventsStatistics(dateRange.from, dateRange.to)
      .subscribe({
        next: response => this.eventsChartData = response,
        error: error => this.errorHandlerService.nextError.next(error)
      });
    });
  }
}
