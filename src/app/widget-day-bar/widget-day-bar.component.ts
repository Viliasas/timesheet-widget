import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Day } from '../day';

@Component({
  selector: 'app-widget-day-bar',
  templateUrl: './widget-day-bar.component.html',
  styleUrls: ['./widget-day-bar.component.scss']
})

export class WidgetDayBarComponent implements OnInit {

  @Input() days: Day[] = [];
  @Input() selectedIndex!: number;
  @Output() selectedIndexChanged = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  clickedOnDay(index: number): void {
    this.selectedIndexChanged.emit(index);
  }

}
