import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Task } from '../../interfaces/task.interface';

@Component({
  selector: 'app-task-table',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './task-table.component.html',
  styleUrls: ['./task-table.component.scss'],
})
export class TaskTableComponent implements OnInit {
  tasks: Task[] = [];
  selectedTasks = new Set<number>();
  searchText: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.loadTasks();
    this.updateTaskStatuses();
  }

  // Filter Tasks by Search Text
  filteredTasks(): Task[] {
    if (!this.searchText.trim()) {
      return this.tasks;
    }
    const lowerSearchText = this.searchText.toLowerCase();
    return this.tasks.filter(task => task.title.toLowerCase().includes(lowerSearchText));
  }

  // Load Tasks from LocalStorage
  loadTasks() {
    const tasksJson = localStorage.getItem('tasks');
    this.tasks = tasksJson ? JSON.parse(tasksJson) : [];
  }
  // Check if Task is Overdue
  isOverdue(date: string): boolean {
    const taskDate = new Date(date + 'T00:00:00');
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return taskDate.getTime() < today.getTime();
  }
  
  // Update Task Statuses
  updateTaskStatuses() {
    this.tasks.forEach((task) => {
      if (this.isOverdue(task.date) && task.status !== 'Done') {
        task.status = 'Overdue';
      }
    });
    this.saveTasksToLocalStorage();
  }

  // Toggle Task Selection
  toggleTaskSelection(taskId: number) {
    if (this.selectedTasks.has(taskId)) {
      this.selectedTasks.delete(taskId);
    } else {
      this.selectedTasks.add(taskId);
    }
  }
  // Delete Selected Tasks
  deleteSelectedTasks() {
    this.tasks = this.tasks.filter(task => !this.selectedTasks.has(task.id));
    this.selectedTasks.clear();
    this.saveTasksToLocalStorage();
  }
  
  // Save Tasks to LocalStorage
  saveTasksToLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  // Get Action Button Text
  getActionButtonText(): string {
    return this.selectedTasks.size === 1 ? 'Update Task' : 'Create Task';
  }

  // Check if Action Button is Disabled
  isActionButtonDisabled(): boolean {
    return this.selectedTasks.size > 1;
  }

  // Handle Action Button Click
  handleActionButtonClick() {
    if (this.selectedTasks.size === 1) {
      const taskId = Array.from(this.selectedTasks)[0];
      this.navigateToEditForm(taskId);
    } else {
      this.navigateToTaskForm();
    }
  }

  // Navigate to Task Form
  navigateToTaskForm() {
    this.router.navigate(['/task-form']);
  }

  // Navigate to Edit Form
  navigateToEditForm(taskId: number) {
    this.router.navigate(['/task-form', taskId]);
  }
}
