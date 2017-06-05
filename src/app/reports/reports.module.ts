import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateRangeComponent } from './dashboard/date-range/date-range.component';
import { DeliveriesChartComponent } from './dashboard/deliveries-chart/deliveries-chart.component';
import { ActivitySummaryComponent } from './dashboard/activity-summary/activity-summary.component';
import { EventsChartComponent } from "./dashboard/events-chart/events-chart.component";
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReportsService } from "app/shared/services/reports/reports.service";
import { SharedModule } from "app/shared/shared.module";
import { DownloadsComponent } from './downloads/downloads.component';
import { AuthService } from "app/shared/services/auth/auth.service";

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    DateRangeComponent, 
    DeliveriesChartComponent, 
    EventsChartComponent, 
    ActivitySummaryComponent, 
    DashboardComponent, DownloadsComponent
  ],
  exports: [
    DashboardComponent
  ],
  providers: [
    ReportsService,
    AuthService
  ]
})
export class ReportsModule { }
