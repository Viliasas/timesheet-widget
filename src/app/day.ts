import * as moment from 'moment';
import { Moment } from 'moment/moment';

export class Day {

  constructor(private day: Moment) {
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

}
