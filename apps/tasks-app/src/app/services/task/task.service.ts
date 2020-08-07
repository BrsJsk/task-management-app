import {Injectable} from "@angular/core";
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ITask} from "../../models/task.interface";

@Injectable({
    providedIn: "root"
})
export class TaskService {
    private apiUrl: string = environment.apiUrl;

    constructor(private http: HttpClient) {
    }

    public createTask(task: {
        title: string;
        description: string;
    }): Observable<ITask> {
        return this.http.post<ITask>(`${this.apiUrl}/task`, task);
    }
}
