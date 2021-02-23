import { Component, OnInit } from '@angular/core';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

@Component({
  selector: 'app-widget-summary',
  templateUrl: './widget-summary.component.html',
  styleUrls: ['./widget-summary.component.scss']
})
export class WidgetSummaryComponent implements OnInit {

  scrollConfig: PerfectScrollbarConfigInterface = {
    suppressScrollX: true,
    suppressScrollY: false,
  };

  constructor() {
  }

  ngOnInit(): void {
  }

}
