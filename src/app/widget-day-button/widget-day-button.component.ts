import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Day } from '../day';
import { Event } from '../event';

@Component({
  selector: 'app-widget-day-button',
  templateUrl: './widget-day-button.component.html',
  styleUrls: ['./widget-day-button.component.scss']
})
export class WidgetDayButtonComponent implements OnInit, OnChanges {

  @Input() day!: Day;
  @Input() isActive = false;
  @Input() events: Event[] = [];

  hasTasks = false;
  hasHoursTasks = false;
  hasRejectedTasks = false;
  allTasksApproved = false;
  hours = '-';

  constructor() {
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (Object.keys(changes).indexOf('events') !== -1) {
      this.hasTasks = false;
      this.hasHoursTasks = false;
      this.hasRejectedTasks = false;
      this.allTasksApproved = false;
      this.hours = '-';

      if (!this.events?.length) {
        return;
      }

      let totalTasks = 0;
      let totalApprovedTasks = 0;
      let minutes = 0;

      this.events.forEach((event: Event) => {
        if (!event.date?.isSame(this.day?.getMoment(), 'day')) {
          return;
        }

        this.hasTasks = true;

        if (!event.isHoursEventType) {
          return;
        }

        this.hasHoursTasks = true;

        totalTasks++;

        if (event.isRejected) {
          this.hasRejectedTasks = true;
        }

        if (event.isApproved) {
          totalApprovedTasks++;
        }

        if (event.firstTaskStart !== undefined && event.lastTaskEnd !== undefined) {
          minutes += Math.abs(event.firstTaskStart?.diff(event.lastTaskEnd, 'minutes'));
        }
      });

      this.allTasksApproved = totalTasks !== 0 && totalTasks === totalApprovedTasks;

      if (minutes > 0) {
        this.hours = Math.floor(minutes / 60).toString().padStart(2, '0') + ':' + (minutes % 60).toString().padStart(2, '0');
      }
    }
  }
}
