import { Routes } from '@angular/router';
import { TaskManagerFormComponent } from './components/task-manager-form/task-manager-form.component';

export const routes: Routes = [
  { path: '', component: TaskManagerFormComponent }, // Ruta principal
  { path: 'formulario', component: TaskManagerFormComponent }, // Ruta alternativa
  { path: '**', redirectTo: '' }, // Redirigir rutas no encontradas a la principal
];