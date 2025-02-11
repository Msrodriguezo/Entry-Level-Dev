import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Task } from '../../interfaces/task.interface';
import { TaskStatus } from '../../interfaces/status.interface';

@Component({
  selector: 'app-task-manager-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './task-manager-form.component.html',
  styleUrl: './task-manager-form.component.scss',
})
export class TaskManagerFormComponent {
  // Form Typed
  formData: Task = {
    title: '',
    description: '',
    date: '',
    status: 'To Do',
  };

  // Status Options
  statusOptions: TaskStatus[] = ['To Do', 'In Progress', 'Done'];

  // Sumbit form
  onSubmit() {
    console.log('Submitted form:', this.formData);
    alert('Form submitted successfully:\n' + JSON.stringify(this.formData, null, 2));
    this.resetForm();
  }

  // Cancel form calling resetForm
  onCancel() {
    console.log('Canceled form');
    this.resetForm();
  }

  // Reset form
  resetForm() {
    this.formData = {
      title: '',
      description: '',
      date: '',
      status: 'To Do',
    };
  }
}