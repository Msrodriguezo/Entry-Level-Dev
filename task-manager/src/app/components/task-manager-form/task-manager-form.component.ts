import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'; // Importar ActivatedRoute
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TaskStatus } from '../../interfaces/status.interface';
import { Task } from '../../interfaces/task.interface';

@Component({
  selector: 'app-task-manager-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './task-manager-form.component.html',
  styleUrl: './task-manager-form.component.scss',
})
export class TaskManagerFormComponent implements OnInit {
  formData: Task = {
    id: 0,
    title: '',
    description: '',
    date: '',
    status: 'To Do',
  };

  statusOptions: TaskStatus[] = ['To Do', 'In Progress', 'Done'];
  isEditMode = false;
  minDate: string = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {

    this.calculateMinDate();
    const taskId = this.route.snapshot.paramMap.get('id');
    if (taskId) {
      this.isEditMode = true;
      this.loadTaskForEdit(Number(taskId));
      if (this.formData.status === 'Overdue') {
        this.statusOptions.push('Overdue');
      }
    }
  }

  //Calculate minimum date
  calculateMinDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const day = today.getDate().toString().padStart(2, '0');
    this.minDate = `${year}-${month}-${day}`;
  
  }

  // Get tasks from LocalStorage
  getTasksFromLocalStorage(): Task[] {
    const tasksJson = localStorage.getItem('tasks');
    return tasksJson ? JSON.parse(tasksJson) : [];
  }

  // Load task for edit
  loadTaskForEdit(taskId: number) {
    const tasks = this.getTasksFromLocalStorage();
    const task = tasks.find((t) => t.id === taskId);
    if (task) {
      this.formData = { ...task };
    }
  }

  // Save tasks to LocalStorage
  saveTasksToLocalStorage(tasks: Task[]) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  // Generate a unique task ID
  generateTaskId(tasks: Task[]): number {
    return tasks.length > 0 ? Math.max(...tasks.map((t) => t.id)) + 1 : 1;
  }

  //Submit form
  onSubmit() {
    const tasks = this.getTasksFromLocalStorage();

    if (this.isEditMode) {
      // Edit existing task
      const index = tasks.findIndex((t) => t.id === this.formData.id);
      if (index !== -1) {
        tasks[index] = { ...this.formData }; // Update the task
      }
    } else {
      // Create new task
      this.formData.id = this.generateTaskId(tasks); // Assign a unique ID
      tasks.push({ ...this.formData }); // Save the new task
    }

    this.saveTasksToLocalStorage(tasks); // Save tasks to LocalStorage
    this.router.navigate(['/task-table']); // navigate to task table
  }

  // Cancel form
  onCancel() {
    this.router.navigate(['/task-table']);
  }

  // Reset Form Data
  resetForm() {
    this.formData = {
      id: 0,
      title: '',
      description: '',
      date: '',
      status: 'To Do',
    };
  }
}