import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetSummaryGroupComponent } from './widget-summary-group.component';

describe('WidgetSummaryGroupComponent', () => {
  let component: WidgetSummaryGroupComponent;
  let fixture: ComponentFixture<WidgetSummaryGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetSummaryGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetSummaryGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
