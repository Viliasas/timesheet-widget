import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Day } from '../day';
import { Event } from '../event';

@Component({
  selector: 'app-widget-header',
  templateUrl: './widget-header.component.html',
  styleUrls: ['./widget-header.component.scss']
})
export class WidgetHeaderComponent implements OnInit {

  @Input() days: Day[] = [];
  @Input() selectedDay?: Day;
  @Input() events: Event[] = [];
  @Output() selectedDayChanged = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

}
