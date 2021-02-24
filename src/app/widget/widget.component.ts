import { Component, OnInit } from '@angular/core';
import { Day } from '../day';
import { Event } from '../event';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss']
})

export class WidgetComponent implements OnInit {

  days: Day[] = [];
  events: Event[] = [];
  selectedDay?: Day;

  constructor(private backendService: BackendService) {
  }

  ngOnInit(): void {
    this.backendService.getDays().then((days: Day[]) => {
      this.days.push(...days);

      this.selectedDay = this.days[this.days.length - 1];
    });

    this.backendService.getEvents().then((events: Event[]) => {
      this.events.push(...events);
    });

    console.log(this.events);
  }

}
