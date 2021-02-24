import * as moment from 'moment';
import { Moment } from 'moment/moment';

export class Day {

  date: string;

  constructor(private day: Moment) {
    this.date = day.format('YYYY-MM-DD');
  }

  getDayName(): string {
    return this.day.format('ddd');
  }

  getDayNumber(): string {
    return this.day.format('D');
  }

  getMonthYear(): string {
    return this.day.format('MMMM YYYY');
  }

  getDayDate(): string {
    return this.day.format('dddd DD.MM.YYYY');
  }

  isWeekend(): boolean {
    const weekDay = this.day.day();

    return weekDay === 0 || weekDay === 6;
  }

  isCurrentDay(): boolean {
    return this.day.isSame(moment(), 'day');
  }

  getMoment(): Moment {
    return this.day.clone();
  }

  isEqual(day?: Day): boolean {
    if ((day === undefined) || (day === null)) {
      return false;
    }

    return this.date === day.date;
  }

}
