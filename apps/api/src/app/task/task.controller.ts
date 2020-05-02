import {
    Controller,
    Get,
    Body,
    Post,
    Param,
    Delete,
    Patch,
    Query,
    UsePipes,
    ValidationPipe
} from "@nestjs/common";
import { TaskService } from "./task.service";
import { CreateTaskDto } from "./dto/create-task.dto";
import { UpdateStatusDto } from "./dto/update-status.dto";
import { GetTasksFilterDto } from "./dto/get-tasks-filter.dto";
import { TaskStatusValidationPipe } from "./pipes/task-status-validation.pipe";

@Controller("task")
export class TaskController {
    constructor(private taskService: TaskService) {}

    @Get()
    findTasks(@Query() filterDto: GetTasksFilterDto) {
        if (Object.keys(filterDto)) {
            return this.taskService.getTasksWithFilters(filterDto);
        }

        return this.taskService.findAll();
    }

    @Post()
    @UsePipes(ValidationPipe)
    create(@Body() createTaskDto: CreateTaskDto) {
        return this.taskService.create(createTaskDto);
    }

    @Get("/:id")
    findById(@Param("id") id: string) {
        return this.taskService.findById(id);
    }

    @Delete("/:id")
    delete(@Param("id") id: string) {
        return this.taskService.delete(id);
    }

    @Patch("/:id/status")
    updateStatus(
        @Param("id") id: string,
        @Body("status", TaskStatusValidationPipe) body: UpdateStatusDto
    ) {
        return this.taskService.updateStatus(id, body.status);
    }
}
