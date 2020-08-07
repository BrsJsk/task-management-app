import {TaskStatus} from "../../../../api/src/app/task/task-status.enum";

export interface ITask {
    id: number;
    title: string;
    description: string;
    status: TaskStatus;
}
