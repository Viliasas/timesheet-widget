import { Injectable } from '@angular/core';
import { BackendService } from './backend.service';
import { Day } from './day';

@Injectable()

export class DayService {

  private days: Day[] = [];

  constructor(private backend: BackendService) {
  }

  getDays(): Day[] {
    this.backend.getDays().then((days: Day[]) => {
      this.days.push(...days);
    });

    return this.days;
  }

}
