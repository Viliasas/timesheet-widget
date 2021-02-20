import { Injectable } from '@angular/core';
import { Day } from './day';

const DAYS = [
  new Day('1'),
  new Day('2'),
  new Day('3'),
  new Day('4'),
  new Day('5'),
  new Day('6'),
  new Day('7'),
];

@Injectable()
export class BackendService {

  constructor() {
  }

  getDays(): PromiseLike<Day[]> {
    return Promise.resolve<Day[]>(DAYS);
  }
}
