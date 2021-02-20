import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetDayButtonComponent } from './widget-day-button.component';

describe('WidgetDayButtonComponent', () => {
  let component: WidgetDayButtonComponent;
  let fixture: ComponentFixture<WidgetDayButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetDayButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetDayButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
