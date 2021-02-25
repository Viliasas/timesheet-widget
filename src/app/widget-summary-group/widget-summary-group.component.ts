import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Event } from '../event';
import { Moment } from 'moment/moment';

@Component({
  selector: 'app-widget-summary-group',
  templateUrl: './widget-summary-group.component.html',
  styleUrls: ['./widget-summary-group.component.scss']
})
export class WidgetSummaryGroupComponent implements OnInit, OnChanges {

  @Input() events?: Event[];

  icon?: string;
  title?: string;
  hours?: string;
  units?: string;
  hasQuantity = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (Object.keys(changes).indexOf('events') !== -1) {
      if (this.events?.length) {
        if (this.events[0].isHoursEventType) {
          this.icon = 'access_time';
          this.title = 'Hours';
          this.hours = this.calculateHours();
          this.units = 'Duration';
        } else if (this.events[0].isExpenseType) {
          this.icon = 'attach_money';
          this.title = 'Expenses';
          this.hours = undefined;
          this.units = 'Total';
        } else if (this.events[0].isAdditionalHoursEventType) {
          this.icon = 'add_alarm';
          this.title = 'Additional hours';
          this.hours = undefined;
          this.units = 'Amount';
        }

        this.hasQuantity = this.events[0].quantity !== undefined;
      }
    }
  }

  calculateHours(): string {
    if (this.events === undefined) {
      return '';
    }

    let start: Moment;
    let end: Moment;

    this.events.forEach((event: Event) => {
      if ((event.firstTaskStart !== undefined) && (start === undefined || start.isAfter(event.firstTaskStart))) {
        start = event.firstTaskStart.clone();
      }

      if ((event.lastTaskEnd !== undefined) && (end === undefined || end.isBefore(event.lastTaskEnd))) {
        end = event.lastTaskEnd.clone();
      }
    });

    // @ts-ignore
    return start.format('HH:mm') + ' - ' + end.format('HH:mm');
  }

  getEventTimeSpent(event: Event): string {
    if (event.firstTaskStart === undefined || event.lastTaskEnd === undefined) {
      return '';
    }

    let hours = event.firstTaskStart.diff(event.lastTaskEnd, 'hours');
    let minutes = event.firstTaskStart.diff(event.lastTaskEnd, 'minutes');

    if (hours < 0) {
      hours = Math.abs(hours);
    }

    if (minutes < 0) {
      minutes = Math.abs(minutes);
    }

    return hours.toString().padStart(2, '0') + ':' + (((hours === 0) || (minutes < 60)) ? minutes : (minutes % (hours * 60))).toString().padStart(2, '0');
  }

  getExpenseTotal(event: Event): string {
    if (event.quantity === undefined || event.price === undefined) {
      return '';
    }

    return (event.quantity * event.price).toFixed(2);
  }

}
