import { Injectable } from '@angular/core';
import { Day } from './day';
import { Event } from './event';
import * as moment from 'moment';

@Injectable()
export class BackendService {

  days: Day[] = [];
  events: Event[] = [];

  constructor() {
    this.prepareDays();
    this.prepareEvents();
  }

  prepareDays(): void {
    for (let i = 6; i >= 0; i--) {
      this.days.push(new Day(moment().subtract(i, 'days')));
    }
  }

  prepareEvents(): void {
    const eventTypes = ['Hours', 'Expenses', 'Additional hours'];

    this.days.forEach(day => {
      const eventCount = this.generateRandomInteger(10);

      for (let i = 0; i < eventCount; i++) {
        const event = new Event();

        event.date = day.getMoment();
        event.eventTypeName = eventTypes[this.generateRandomInteger(3)];

        // TODO Add "quantity" field

        if (event.eventTypeName === 'Hours') {
          event.isHoursEventType = true;
          event.isWorkHour = this.generateRandomInteger(1) === 1;
        } else if (event.eventTypeName === 'Expenses') {
          event.isExpenseType = true;
          event.price = Number(this.generateRandomInteger(1000) + '.' + this.generateRandomInteger(100));
        } else if (event.eventTypeName === 'Additional hours') {
          event.isAdditionalHoursEventType = true;
        }

        event.isApproved = this.generateRandomInteger(1) === 1;
        event.isRejected = !event.isApproved;
        event.tasksCount = this.generateRandomInteger(10);
        event.firstTaskStart = day.getMoment().set('hour', this.generateRandomInteger(24)).set('minute', this.generateRandomInteger(60));

        const hoursLeftInTheDay = 24 - Number(event.firstTaskStart.format(('H')));

        event.lastTaskEnd = day.getMoment().set('hour', this.generateRandomInteger(hoursLeftInTheDay !== 0 ? hoursLeftInTheDay : 1)).set('minute', this.generateRandomInteger(60));

        this.events.push(event);
      }
    });
  }

  generateRandomInteger(max: number): number {
    return Math.floor(Math.random() * Math.floor(max));
  }

  getDays(): PromiseLike<Day[]> {
    return Promise.resolve<Day[]>(this.days);
  }

  getEvents(): PromiseLike<Event[]> {
    return Promise.resolve<Event[]>(this.events);
  }
}
