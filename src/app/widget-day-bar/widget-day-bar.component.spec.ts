import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetDayBarComponent } from './widget-day-bar.component';

describe('WidgetDayBarComponent', () => {
  let component: WidgetDayBarComponent;
  let fixture: ComponentFixture<WidgetDayBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WidgetDayBarComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetDayBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
