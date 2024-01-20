import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradeReportComponent } from './tradeReport.component';

describe('TableComponent', () => {
  let component: TradeReportComponent;
  let fixture: ComponentFixture<TradeReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TradeReportComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TradeReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
