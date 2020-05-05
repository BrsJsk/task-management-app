import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TaskModule } from "./task/task.module";
import { typeOrmConfig } from "./config/typeorm.config";

@Module({
    imports: [TaskModule, TypeOrmModule.forRoot(typeOrmConfig)],
    controllers: [AppController],
    providers: [AppService]
})
export class AppModule {}
