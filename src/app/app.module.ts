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
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

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

//I keep the new line
@NgModule({
  declarations: [
    AppComponent,
    AdminDashboardComponent,
    DashboardComponent,
    DataTableComponent,
    CardDataComponent
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
    MatSlideToggleModule


  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
