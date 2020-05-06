import { Injectable, NotFoundException } from "@nestjs/common";
import { TaskRepository } from "./task.repository";
import { InjectRepository } from "@nestjs/typeorm";
import { Task } from './task.entity';

@Injectable()
export class TaskService {
    constructor(
        @InjectRepository(TaskRepository) private taskRepository: TaskRepository
    ) {}
    // private tasks: Task[] = [];

    // findAll(): Task[] {
    //     return this.tasks;
    // }

    // getTasksWithFilters(filterDto: GetTasksFilterDto): Task[] {
    //     const { search, status } = filterDto;
    //     let tasks = this.findAll();
    //     if (search) {
    //         tasks = tasks.filter(
    //             task =>
    //                 task.description.includes(search) ||
    //                 task.title.includes(search)
    //         );
    //     }

    //     if (status) {
    //         tasks = tasks.filter(task => task.status === status);
    //     }
    //     return this.tasks;
    // }

    // create(createTaskDto: CreateTaskDto): Task {
    //     const { title, description } = createTaskDto;
    //     const task: Task = {
    //         id: uuid(),
    //         title,
    //         description,
    //         status: TaskStatus.OPEN
    //     };

    //     this.tasks = [...this.tasks, task];
    //     return task;
    // }

    async findById(id: number): Promise<Task> {
        const found = await this.taskRepository.findOne(id);

        if (!found) {
            throw new NotFoundException();
        }

        return found;
    }

    // delete(id: string): Task[] {
    //     const found = this.findById(id);

    //     if (!found) {
    //         throw new NotFoundException();
    //     }

    //     this.tasks = this.tasks.filter(task => task.id !== id);
    //     return this.tasks;
    // }

    // updateStatus(id: string, status: TaskStatus) {
    //     this.tasks = this.tasks.map(task => {
    //         if (task.id === id) {
    //             task.status = status;
    //         }
    //         return task;
    //     });

    //     return this.findById(id);
    // }
}
