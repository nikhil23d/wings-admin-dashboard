import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Dashboard1Component } from '../admin-dashboard/dashboard1/dashboard1.component';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from '../admin-dashboard/admin-dashboard.component';
import { Dashboard2Component } from '../admin-dashboard/dashboard2/dashboard2.component';
import { Dashboard3Component } from '../admin-dashboard/dashboard3/dashboard3.component';
import { Dashboard4Component } from '../admin-dashboard/dashboard4/dashboard4.component';

const routes: Routes = [
  // {path: '', component:Dashboard1Component},
  // {path: '#', component:Dashboard1Component},

  {path: 'Dashboard-1', component: Dashboard1Component },
  {path: 'Dashboard-2', component: Dashboard2Component },
  {path: 'Dashboard-3', component: Dashboard3Component },
  {path: 'Dashboard-4', component: Dashboard4Component },

 
  
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
export const routingcomponents = [AdminDashboardComponent];
