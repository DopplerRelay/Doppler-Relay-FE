import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ReportsService } from "app/shared/services/reports/reports.service";
import { EventItem } from "app/shared/models/event-item";

@Component({
  selector: 'app-events-chart',
  templateUrl: './events-chart.component.html',
  styleUrls: ['./events-chart.component.css']
})
export class EventsChartComponent implements OnInit, OnChanges {

  @Input() eventsChartData: EventItem[] = [];

  constructor(private reportsService: ReportsService) { }

  ngOnInit() {
  }
  
  ngOnChanges() {
    // TODO: populate chart based on eventsChartData
  }

}
