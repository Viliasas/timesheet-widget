import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WidgetComponent } from './widget/widget.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { WidgetHeaderComponent } from './widget-header/widget-header.component';
import { WidgetDayBarComponent } from './widget-day-bar/widget-day-bar.component';
import { WidgetDayButtonComponent } from './widget-day-button/widget-day-button.component';
import { BackendService } from './backend.service';
import { DayService } from './day.service';
import { WidgetFooterComponent } from './widget-footer/widget-footer.component';
import { WidgetSummaryComponent } from './widget-summary/widget-summary.component';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { WidgetSummaryGroupComponent } from './widget-summary-group/widget-summary-group.component';

@NgModule({
  declarations: [
    AppComponent,
    WidgetComponent,
    WidgetHeaderComponent,
    WidgetDayBarComponent,
    WidgetDayButtonComponent,
    WidgetFooterComponent,
    WidgetSummaryComponent,
    WidgetSummaryGroupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    PerfectScrollbarModule
  ],
  providers: [
    BackendService,
    DayService
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
