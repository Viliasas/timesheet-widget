import { Component, OnInit } from '@angular/core';
import { DayService } from '../day.service';
import { Day } from '../day';

@Component({
  selector: 'app-widget-header',
  templateUrl: './widget-header.component.html',
  styleUrls: ['./widget-header.component.scss']
})
export class WidgetHeaderComponent implements OnInit {

  days: Day[] = [];
  selectedDayIndex = 6;

  constructor(private service: DayService) {
  }

  ngOnInit(): void {
    this.days = this.service.getDays();
  }

  getSelectedDay(): Day {
    return this.days[this.selectedDayIndex];
  }

}
