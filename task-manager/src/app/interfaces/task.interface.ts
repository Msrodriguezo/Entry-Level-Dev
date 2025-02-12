import { TaskStatus } from "./status.interface";

export interface Task {
    id: number;
    title: string;
    description: string;
    date: string;
    status: TaskStatus;
  }