import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveriesChartComponent } from './deliveries-chart.component';

describe('DeliveriesChartComponent', () => {
  let component: DeliveriesChartComponent;
  let fixture: ComponentFixture<DeliveriesChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliveriesChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveriesChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
