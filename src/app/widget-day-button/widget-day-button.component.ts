import { Component, Input, OnInit } from '@angular/core';
import { Day } from '../day';

@Component({
  selector: 'app-widget-day-button',
  templateUrl: './widget-day-button.component.html',
  styleUrls: ['./widget-day-button.component.scss']
})
export class WidgetDayButtonComponent implements OnInit {

  @Input() day!: Day;

  constructor() {
  }

  ngOnInit(): void {
  }

  clickedOnDay(event: any): void {
    alert('Clicked!');

    event.preventDefault();
  }

}
