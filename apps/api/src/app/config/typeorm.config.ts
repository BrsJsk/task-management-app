import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: "mariadb",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "noname",
    database: "taskman",
    entities: [__dirname + "/../**/*.entity.ts"],
    synchronize: true
};
