import { Routes } from '@angular/router';
import { TaskTableComponent } from './components/task-table/task-table.component';
import { TaskManagerFormComponent } from './components/task-manager-form/task-manager-form.component';

export const routes: Routes = [
  { path: 'task-table', component: TaskTableComponent },
  { path: 'task-form', component: TaskManagerFormComponent },
  { path: 'task-form/:id', component: TaskManagerFormComponent },
  { path: '', redirectTo: '/task-table', pathMatch: 'full' },
];