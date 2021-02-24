import { Component, Input, OnInit } from '@angular/core';
import { Event } from '../event';

@Component({
  selector: 'app-widget-summary-group',
  templateUrl: './widget-summary-group.component.html',
  styleUrls: ['./widget-summary-group.component.scss']
})
export class WidgetSummaryGroupComponent implements OnInit {

  @Input() events?: Event[];

  constructor() {
  }

  ngOnInit(): void {
  }

}
