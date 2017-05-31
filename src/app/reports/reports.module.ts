import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateRangeComponent } from './components/reports-summary/date-range/date-range.component';
import { DeliveriesChartComponent } from './components/reports-summary/deliveries-chart/deliveries-chart.component';
import { ActionsChartComponent } from './components/reports-summary/actions-chart/actions-chart.component';
import { ActivitySummaryComponent } from './components/reports-summary/activity-summary/activity-summary.component';
import { ReportsSummaryComponent } from './components/reports-summary/reports-summary.component';
import { ReportsService } from "app/shared/services/reports/reports.service";
import { SharedModule } from "app/shared/shared.module";
import { DownloadsComponent } from './components/downloads/downloads.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    DateRangeComponent, 
    DeliveriesChartComponent, 
    ActionsChartComponent, 
    ActivitySummaryComponent, 
    ReportsSummaryComponent, DownloadsComponent
  ],
  exports: [
    ReportsSummaryComponent
  ],
  providers: [
    ReportsService
  ]
})
export class ReportsModule { }
