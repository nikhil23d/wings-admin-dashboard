import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//apexcharts
import {NgApexchartsModule} from 'ng-apexcharts';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatToolbarModule } from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';



//calender
// import {FullCalenderModule} from './admin-dashboard/dashboard2/full-calender/full-calender.module'
import {FullCalendarModule} from '@fullcalendar/angular'

import { AppComponent } from './app.component';
import { Dashboard1Component } from './admin-dashboard/dashboard1/dashboard1.component';
import { PiaChartComponent } from './admin-dashboard/dashboard1/pia-chart/pia-chart.component';
import { BarChartComponent } from './admin-dashboard/dashboard1/bar-chart/bar-chart.component';
import { LineChartComponent } from './admin-dashboard/dashboard1/line-chart/line-chart.component';
import { BubbleChartComponent } from './admin-dashboard/dashboard1/bubble-chart/bubble-chart.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing/app-routing.module';
import { Dashboard2Component } from './admin-dashboard/dashboard2/dashboard2.component';
import { Dashboard3Component } from './admin-dashboard/dashboard3/dashboard3.component';
import { Dashboard4Component } from './admin-dashboard/dashboard4/dashboard4.component';
import { FullCalenderComponent } from './admin-dashboard/dashboard2/full-calender/full-calender.component';

@NgModule({
  declarations: [
    AppComponent,
    Dashboard1Component,
    PiaChartComponent,
    BarChartComponent,
    LineChartComponent,
    BubbleChartComponent,
    AdminDashboardComponent,
    Dashboard2Component,
    Dashboard3Component,
    Dashboard4Component,
    FullCalenderComponent
  ],
  imports: [
    BrowserModule,
    NgApexchartsModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    AppRoutingModule,
    FontAwesomeModule,
    FullCalendarModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
