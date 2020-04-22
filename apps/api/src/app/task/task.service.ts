import { Injectable } from '@nestjs/common';
import * as uuid from 'uuid/v1';
import { Task, TaskStatus } from './task.model';
import { CreateTaskDto } from './dto/create-task.dto';

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

    delete(id: string): Task[] {
        this.tasks = this.tasks.filter(task => task.id !== id);
        return this.tasks;
    }

    updateStatus(id: string, status: TaskStatus) {
        this.tasks = this.tasks.map(task => {
            if (task.id === id) {
                task.status = status;
            }
            return task;
        });

        return this.findById(id);
    }
}
