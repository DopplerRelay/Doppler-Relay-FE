import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionsChartComponent } from './actions-chart.component';

describe('ActionsChartComponent', () => {
  let component: ActionsChartComponent;
  let fixture: ComponentFixture<ActionsChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionsChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionsChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
