import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from '../admin-dashboard/admin-dashboard.component';
import { DataTableComponent } from '../admin-dashboard/data-table/data-table.component';
import { DashboardComponent } from '../admin-dashboard/dashboard/dashboard.component';

const routes: Routes = [
  // {path: '', component:Dashboard1Component},
  // {path: '#', component:Dashboard1Component},

  { path: 'Project', component: DataTableComponent },
  { path: 'Dashboard', component: DashboardComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingcomponents = [AdminDashboardComponent];
