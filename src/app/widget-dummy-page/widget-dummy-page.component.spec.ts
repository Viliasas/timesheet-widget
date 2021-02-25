import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetDummyPageComponent } from './widget-dummy-page.component';

describe('WidgetDummyPageComponent', () => {
  let component: WidgetDummyPageComponent;
  let fixture: ComponentFixture<WidgetDummyPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WidgetDummyPageComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetDummyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
