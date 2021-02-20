import { Component, OnInit } from '@angular/core';
import { Day } from '../day';
import { DayService } from '../day.service';

@Component({
  selector: 'app-widget-day-bar',
  templateUrl: './widget-day-bar.component.html',
  styleUrls: ['./widget-day-bar.component.scss']
})

export class WidgetDayBarComponent implements OnInit {

  days: Day[] = [];

  constructor(private service: DayService) {
  }

  ngOnInit(): void {
    this.days = this.service.getDays();
  }

}
