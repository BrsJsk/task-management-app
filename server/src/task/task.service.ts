import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from 'src/task/task.model';
import * as uuid from 'uuid/v1';
import { CreateTaskDto } from 'src/task/dto/create-task.dto';

@Injectable()
export class TaskService {
  private tasks: Task[] = [];

  findAll(): Task[] {
    return this.tasks;
  }

  create(createTaskDto: CreateTaskDto): Task {
    const { title, description } = createTaskDto;
    const task: Task = {
      id: uuid(),
      title,
      description,
      status: TaskStatus.OPEN,
    };

    this.tasks = [...this.tasks, task];
    return task;
  }

  findById(id: string): Task {
    return this.tasks.find(task => task.id === id);
  }
}
