import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Day } from '../day';

@Component({
  selector: 'app-widget-day-bar',
  templateUrl: './widget-day-bar.component.html',
  styleUrls: ['./widget-day-bar.component.scss']
})

export class WidgetDayBarComponent implements OnInit {

  @Input() days: Day[] = [];
  @Input() selectedDay?: Day;
  @Output() selectedDayChanged = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

}
