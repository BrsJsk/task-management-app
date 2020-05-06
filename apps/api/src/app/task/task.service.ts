import { Injectable, NotFoundException } from "@nestjs/common";
import { TaskRepository } from "./task.repository";
import { InjectRepository } from "@nestjs/typeorm";
import { Task } from "./task.entity";
import { TaskStatus } from "./task-status.enum";
import { CreateTaskDto } from "./dto/create-task.dto";
import { DeleteResult } from 'typeorm';

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

    async create(createTaskDto: CreateTaskDto): Promise<Task> {
        return this.taskRepository.createTask(createTaskDto);
    }

    async findById(id: number): Promise<Task> {
        const found = await this.taskRepository.findOne(id);

        if (!found) {
            throw new NotFoundException();
        }

        return found;
    }

    delete(id: number): Promise<DeleteResult> {
        return this.taskRepository.delete(id);
    }

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
