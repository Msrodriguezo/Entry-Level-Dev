import { TaskStatus } from "./status.interface";

export interface Task {
    title: string;
    description: string;
    date: string;
    status: TaskStatus;
  }