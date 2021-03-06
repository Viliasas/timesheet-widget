import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { Day } from '../day';
import { Event } from '../event';

@Component({
  selector: 'app-widget-summary',
  templateUrl: './widget-summary.component.html',
  styleUrls: ['./widget-summary.component.scss']
})
export class WidgetSummaryComponent implements OnInit, OnChanges {

  @Input() selectedDay?: Day;
  @Input() events: Event[] = [];

  sortedEvents: [Event[]] = [[]];

  scrollConfig: PerfectScrollbarConfigInterface = {
    suppressScrollX: true,
    suppressScrollY: false,
  };

  constructor() {
    this.sortedEvents.splice(0, this.sortedEvents.length);
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (Object.keys(changes).indexOf('selectedDay') !== -1) {
      this.sortEventsForSelectedDay();
    }
  }

  private sortEventsForSelectedDay(): void {
    const temp = {};

    this.events.forEach((event: Event) => {
      if (!event.date?.isSame(this.selectedDay?.getMoment(), 'day')) {
        return;
      }

      let eventType = '-';

      if (event.isHoursEventType) {
        eventType = 'Hours';
      } else if (event.isExpenseType) {
        eventType = 'Expenses';
      } else if (event.isAdditionalHoursEventType) {
        eventType = 'Additional hours';
      }

      // @ts-ignore
      if (typeof temp[eventType] === 'undefined') {
        // @ts-ignore
        temp[eventType] = [];
      }

      // @ts-ignore
      temp[eventType].push(event);
    });

    this.sortedEvents.splice(0, this.sortedEvents.length);

    Object.keys(temp).forEach((key: string) => {
      // @ts-ignore
      this.sortedEvents.push(temp[key]);
    });

    console.log(this.sortedEvents);
  }

}
