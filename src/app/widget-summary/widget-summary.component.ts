import { Component, Input, OnInit } from '@angular/core';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { Day } from '../day';
import { Event } from '../event';

@Component({
  selector: 'app-widget-summary',
  templateUrl: './widget-summary.component.html',
  styleUrls: ['./widget-summary.component.scss']
})
export class WidgetSummaryComponent implements OnInit {

  @Input() selectedDay?: Day;
  @Input() events: Event[] = [];

  scrollConfig: PerfectScrollbarConfigInterface = {
    suppressScrollX: true,
    suppressScrollY: false,
  };

  constructor() {
  }

  ngOnInit(): void {
  }

}
