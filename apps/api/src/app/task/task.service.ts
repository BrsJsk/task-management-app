import { Injectable, NotFoundException } from "@nestjs/common";
import * as uuid from "uuid/v1";
import { Task, TaskStatus } from "./task.model";
import { CreateTaskDto } from "./dto/create-task.dto";
import { GetTasksFilterDto } from "./dto/get-tasks-filter.dto";

@Injectable()
export class TaskService {
    private tasks: Task[] = [];

    findAll(): Task[] {
        return this.tasks;
    }

    getTasksWithFilters(filterDto: GetTasksFilterDto): Task[] {
        const { search, status } = filterDto;
        let tasks = this.findAll();
        if (search) {
            tasks = tasks.filter(
                task =>
                    task.description.includes(search) ||
                    task.title.includes(search)
            );
        }

        if (status) {
            tasks = tasks.filter(task => task.status === status);
        }
        return this.tasks;
    }

    create(createTaskDto: CreateTaskDto): Task {
        const { title, description } = createTaskDto;
        const task: Task = {
            id: uuid(),
            title,
            description,
            status: TaskStatus.OPEN
        };

        this.tasks = [...this.tasks, task];
        return task;
    }

    findById(id: string): Task {
        const task = this.tasks.find(task => task.id === id);

        if (!task) {
            throw new NotFoundException();
        }

        return task;
    }

    delete(id: string): Task[] {
        const found = this.findById(id);

        if (!found) {
            throw new NotFoundException();
        }

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
