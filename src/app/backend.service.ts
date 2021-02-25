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
    // @ts-ignore
    const randomWords = require('random-words');

    const eventTypes = ['Hours', 'Expenses', 'Additional hours'];

    this.days.forEach(day => {
      const eventCount = this.generateRandomInteger(0, 10);

      for (let i = 0; i < eventCount; i++) {
        const type = eventTypes[this.generateRandomInteger(0, 2)];
        const words = randomWords({exactly: 2, join: ' '});

        const event = new Event();

        event.date = day.getMoment();
        event.eventTypeName = words.charAt(0).toUpperCase() + words.slice(1);

        if (type === 'Hours') {
          event.isHoursEventType = true;
          event.isWorkHour = this.generateRandomInteger(0, 1) === 1;
        } else if (type === 'Expenses') {
          event.isExpenseType = true;
          event.quantity = this.generateRandomInteger(1, 5);
          event.price = Number(this.generateRandomInteger(0, 1000) + '.' + this.generateRandomInteger(0, 100));
        } else if (type === 'Additional hours') {
          event.isAdditionalHoursEventType = true;
        }

        event.isApproved = this.generateRandomInteger(0, 1) === 1;
        event.isRejected = !event.isApproved;
        event.tasksCount = this.generateRandomInteger(1, 5);
        event.firstTaskStart = day.getMoment().set('hour', this.generateRandomInteger(0, 23)).set('minute', this.generateRandomInteger(0, 59));

        const hoursLeftInTheDay = 24 - Number(event.firstTaskStart.format(('H')));

        event.lastTaskEnd = day.getMoment().set('hour', this.generateRandomInteger(1, hoursLeftInTheDay !== 0 ? hoursLeftInTheDay : 1)).set('minute', this.generateRandomInteger(Number(event.firstTaskStart.format(('m'))), 59));

        this.events.push(event);
      }
    });
  }

  generateRandomInteger(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  getDays(): PromiseLike<Day[]> {
    return Promise.resolve<Day[]>(this.days);
  }

  getEvents(): PromiseLike<Event[]> {
    return Promise.resolve<Event[]>(this.events);
  }
}
