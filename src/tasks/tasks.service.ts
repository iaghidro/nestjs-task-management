import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
import { v1 as uuid } from 'uuid';
import { CreateTaskDto } from './dto/create-task.dto';
@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  getAllTasks(): Task[] {
    return this.tasks;
  }

  createTask(createTaskDto: CreateTaskDto): Task {
    const { title, description } = createTaskDto;
    const task: Task = {
      id: uuid(),
      title,
      description,
      status: TaskStatus.OPEN,
    };
    this.tasks.push(task);
    return task;
  }

  getTaskById(id: string): Task {
    return this.tasks.find(task => task.id === id);
  }

  deleteTask(id: string): Task {
    const index = this.tasks.findIndex(task => task.id === id);
    const task = this.tasks[index];
    this.tasks.splice(index, 1);
    return task;
  }

  updateStatus(id: string, status: TaskStatus): Task {
    const index = this.tasks.findIndex(task => (task.id = id));
    this.tasks[index].status = status;
    return this.tasks[index];
  }
}
