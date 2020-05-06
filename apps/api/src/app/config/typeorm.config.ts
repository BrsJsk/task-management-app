import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { Task } from '../task/task.entity';

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: "mariadb",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "noname",
    database: "taskman",
    entities: [Task],
    synchronize: false
};
