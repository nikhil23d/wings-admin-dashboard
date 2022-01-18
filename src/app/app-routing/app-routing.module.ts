import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from '../admin-dashboard/admin-dashboard.component';
import { DataTableComponent } from '../admin-dashboard/data-table/data-table.component';
import { DashboardComponent } from '../admin-dashboard/dashboard/dashboard.component';
import { CalenderComponent } from '../admin-dashboard/calender/calender.component';
import { TasksComponent } from '../admin-dashboard/tasks/tasks.component';
import { KanbanComponent } from '../admin-dashboard/kanban/kanban.component';
import { ContactsComponent } from '../admin-dashboard/contacts/contacts.component';
import { MessagesComponent } from '../admin-dashboard/messages/messages.component';
import { ProductsComponent } from '../admin-dashboard/products/products.component';
import { InvoicesComponent } from '../admin-dashboard/invoices/invoices.component';
import { FileBrowsersComponent } from '../admin-dashboard/file-browsers/file-browsers.component';
import { NotificationsComponent } from '../admin-dashboard/notifications/notifications.component';

const routes: Routes = [
  // {path: '', component:Dashboard1Component},
  // {path: '#', component:Dashboard1Component},

  { path: 'Project', component: DataTableComponent },
  { path: 'Dashboard', component: DashboardComponent },
  { path: 'Calender', component: CalenderComponent },
  { path: 'Tasks', component: TasksComponent },
  { path: 'Kanban', component: KanbanComponent },
  { path: 'Contacts', component: ContactsComponent },
  { path: 'Messages', component: MessagesComponent },
  { path: 'Products', component: ProductsComponent },
  { path: 'Invoices', component: InvoicesComponent },
  { path: 'File-Browsers', component: FileBrowsersComponent },
  { path: 'Notifications', component: NotificationsComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingcomponents = [AdminDashboardComponent];
