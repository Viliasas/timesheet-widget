import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WidgetComponent } from './widget/widget.component';
import { WidgetDummyPageComponent } from './widget-dummy-page/widget-dummy-page.component';

const routes: Routes = [
  {path: '', component: WidgetComponent},
  {path: 'add-task', component: WidgetDummyPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
