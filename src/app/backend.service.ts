import { Injectable } from '@angular/core';
import { Day } from './day';
import * as moment from 'moment';

@Injectable()
export class BackendService {

  days: Day[] = [];

  constructor() {
    this.prepareDays();
  }

  getDays(): PromiseLike<Day[]> {
    return Promise.resolve<Day[]>(this.days);
  }

  prepareDays(): void {
    for (let i = 6; i >= 0; i--) {
      this.days.push(new Day(moment().subtract(i, 'days')));
    }
  }
}
