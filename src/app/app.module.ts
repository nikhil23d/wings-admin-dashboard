import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//apexcharts

import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { HttpClientModule } from '@angular/common/http';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { HighchartsChartModule } from 'highcharts-angular';

//igx import
// import {
// 	IgxPaginatorModule,
// 	IgxRippleModule,
// 	IgxButtonGroupModule,
// 	IgxButtonModule,
// 	IgxIconModule,
// 	IgxCardModule
//  } from "igniteui-angular";

import { AppComponent } from './app.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { DashboardComponent } from './admin-dashboard/dashboard/dashboard.component';
import { DataTableComponent } from './admin-dashboard/data-table/data-table.component';
import { CardDataComponent } from './admin-dashboard/data-table/card-data/card-data.component';
import { CardComponent } from './admin-dashboard/dashboard/card/card.component';
import { TasksComponent } from './admin-dashboard/tasks/tasks.component';
import { KanbanComponent } from './admin-dashboard/kanban/kanban.component';
import { CalenderComponent } from './admin-dashboard/calender/calender.component';
import { ContactsComponent } from './admin-dashboard/contacts/contacts.component';
import { MessagesComponent } from './admin-dashboard/messages/messages.component';
import { ProductsComponent } from './admin-dashboard/products/products.component';
import { InvoicesComponent } from './admin-dashboard/invoices/invoices.component';
import { FileBrowsersComponent } from './admin-dashboard/file-browsers/file-browsers.component';
import { NotificationsComponent } from './admin-dashboard/notifications/notifications.component';

//I keep the new line
@NgModule({
  declarations: [
    AppComponent,
    AdminDashboardComponent,
    DashboardComponent,
    DataTableComponent,
    CardDataComponent,
    CardComponent,
    TasksComponent,
    KanbanComponent,
    CalenderComponent,
    ContactsComponent,
    MessagesComponent,
    ProductsComponent,
    InvoicesComponent,
    FileBrowsersComponent,
    NotificationsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    AppRoutingModule,
    FontAwesomeModule,
    MatTableModule,
    MatSortModule,
    HttpClientModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    FlexLayoutModule,
    MatSlideToggleModule,
    HighchartsChartModule,
    MatDatepickerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
