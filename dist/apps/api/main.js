(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./apps/api/src/app/app.controller.ts":
/*!********************************************!*\
  !*** ./apps/api/src/app/app.controller.ts ***!
  \********************************************/
/*! exports provided: AppController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppController", function() { return AppController; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.service */ "./apps/api/src/app/app.service.ts");
var _a;



let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    getHello() {
        return this.appService.getHello();
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Get"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", []),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", String)
], AppController.prototype, "getHello", null);
AppController = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Controller"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof _app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"] !== "undefined" && _app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]) === "function" ? _a : Object])
], AppController);



/***/ }),

/***/ "./apps/api/src/app/app.module.ts":
/*!****************************************!*\
  !*** ./apps/api/src/app/app.module.ts ***!
  \****************************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_typeorm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
/* harmony import */ var _nestjs_typeorm__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_typeorm__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.controller */ "./apps/api/src/app/app.controller.ts");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.service */ "./apps/api/src/app/app.service.ts");
/* harmony import */ var _task_task_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./task/task.module */ "./apps/api/src/app/task/task.module.ts");
/* harmony import */ var _config_typeorm_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./config/typeorm.config */ "./apps/api/src/app/config/typeorm.config.ts");







let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Module"])({
        imports: [_task_task_module__WEBPACK_IMPORTED_MODULE_5__["TaskModule"], _nestjs_typeorm__WEBPACK_IMPORTED_MODULE_2__["TypeOrmModule"].forRoot(_config_typeorm_config__WEBPACK_IMPORTED_MODULE_6__["typeOrmConfig"])],
        controllers: [_app_controller__WEBPACK_IMPORTED_MODULE_3__["AppController"]],
        providers: [_app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"]]
    })
], AppModule);



/***/ }),

/***/ "./apps/api/src/app/app.service.ts":
/*!*****************************************!*\
  !*** ./apps/api/src/app/app.service.ts ***!
  \*****************************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);


let AppService = class AppService {
    getHello() {
        return 'Hello World!';
    }
};
AppService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AppService);



/***/ }),

/***/ "./apps/api/src/app/config/typeorm.config.ts":
/*!***************************************************!*\
  !*** ./apps/api/src/app/config/typeorm.config.ts ***!
  \***************************************************/
/*! exports provided: typeOrmConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "typeOrmConfig", function() { return typeOrmConfig; });
/* harmony import */ var _task_task_entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../task/task.entity */ "./apps/api/src/app/task/task.entity.ts");

const typeOrmConfig = {
    type: "mariadb",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "noname",
    database: "taskman",
    entities: [_task_task_entity__WEBPACK_IMPORTED_MODULE_0__["Task"]],
    synchronize: false
};


/***/ }),

/***/ "./apps/api/src/app/task/task-status.enum.ts":
/*!***************************************************!*\
  !*** ./apps/api/src/app/task/task-status.enum.ts ***!
  \***************************************************/
/*! exports provided: TaskStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskStatus", function() { return TaskStatus; });
var TaskStatus;
(function (TaskStatus) {
    TaskStatus["OPEN"] = "open";
    TaskStatus["CLOSED"] = "closed";
    TaskStatus["ACTIVE"] = "active";
})(TaskStatus || (TaskStatus = {}));
;


/***/ }),

/***/ "./apps/api/src/app/task/task.controller.ts":
/*!**************************************************!*\
  !*** ./apps/api/src/app/task/task.controller.ts ***!
  \**************************************************/
/*! exports provided: TaskController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskController", function() { return TaskController; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _task_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task.service */ "./apps/api/src/app/task/task.service.ts");
var _a;



let TaskController = class TaskController {
    constructor(taskService) {
        this.taskService = taskService;
    }
    // @Get()
    // findTasks(@Query() filterDto: GetTasksFilterDto) {
    //     if (Object.keys(filterDto)) {
    //         return this.taskService.getTasksWithFilters(filterDto);
    //     }
    //     return this.taskService.findAll();
    // }
    // @Post()
    // @UsePipes(ValidationPipe)
    // create(@Body() createTaskDto: CreateTaskDto) {
    //     return this.taskService.create(createTaskDto);
    // }
    findById(id) {
        return this.taskService.findById(id);
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Get"])("/:id"),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Param"])("id")),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Number]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
], TaskController.prototype, "findById", null);
TaskController = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Controller"])("task"),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof _task_service__WEBPACK_IMPORTED_MODULE_2__["TaskService"] !== "undefined" && _task_service__WEBPACK_IMPORTED_MODULE_2__["TaskService"]) === "function" ? _a : Object])
], TaskController);



/***/ }),

/***/ "./apps/api/src/app/task/task.entity.ts":
/*!**********************************************!*\
  !*** ./apps/api/src/app/task/task.entity.ts ***!
  \**********************************************/
/*! exports provided: Task */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Task", function() { return Task; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! typeorm */ "typeorm");
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(typeorm__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _task_status_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task-status.enum */ "./apps/api/src/app/task/task-status.enum.ts");
var _a;



let Task = class Task extends typeorm__WEBPACK_IMPORTED_MODULE_1__["BaseEntity"] {
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["PrimaryGeneratedColumn"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], Task.prototype, "id", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Column"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], Task.prototype, "title", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Column"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], Task.prototype, "description", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Column"])({ type: 'text' }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", typeof (_a = typeof _task_status_enum__WEBPACK_IMPORTED_MODULE_2__["TaskStatus"] !== "undefined" && _task_status_enum__WEBPACK_IMPORTED_MODULE_2__["TaskStatus"]) === "function" ? _a : Object)
], Task.prototype, "status", void 0);
Task = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Entity"])('Task')
], Task);



/***/ }),

/***/ "./apps/api/src/app/task/task.module.ts":
/*!**********************************************!*\
  !*** ./apps/api/src/app/task/task.module.ts ***!
  \**********************************************/
/*! exports provided: TaskModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskModule", function() { return TaskModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _task_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task.controller */ "./apps/api/src/app/task/task.controller.ts");
/* harmony import */ var _task_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./task.service */ "./apps/api/src/app/task/task.service.ts");
/* harmony import */ var _nestjs_typeorm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
/* harmony import */ var _nestjs_typeorm__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_nestjs_typeorm__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _task_repository__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./task.repository */ "./apps/api/src/app/task/task.repository.ts");






let TaskModule = class TaskModule {
};
TaskModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Module"])({
        imports: [_nestjs_typeorm__WEBPACK_IMPORTED_MODULE_4__["TypeOrmModule"].forFeature([_task_repository__WEBPACK_IMPORTED_MODULE_5__["TaskRepository"]])],
        controllers: [_task_controller__WEBPACK_IMPORTED_MODULE_2__["TaskController"]],
        providers: [_task_service__WEBPACK_IMPORTED_MODULE_3__["TaskService"]]
    })
], TaskModule);



/***/ }),

/***/ "./apps/api/src/app/task/task.repository.ts":
/*!**************************************************!*\
  !*** ./apps/api/src/app/task/task.repository.ts ***!
  \**************************************************/
/*! exports provided: TaskRepository */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskRepository", function() { return TaskRepository; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! typeorm */ "typeorm");
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(typeorm__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _task_entity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task.entity */ "./apps/api/src/app/task/task.entity.ts");



let TaskRepository = class TaskRepository extends typeorm__WEBPACK_IMPORTED_MODULE_1__["Repository"] {
};
TaskRepository = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["EntityRepository"])(_task_entity__WEBPACK_IMPORTED_MODULE_2__["Task"])
], TaskRepository);



/***/ }),

/***/ "./apps/api/src/app/task/task.service.ts":
/*!***********************************************!*\
  !*** ./apps/api/src/app/task/task.service.ts ***!
  \***********************************************/
/*! exports provided: TaskService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskService", function() { return TaskService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _task_repository__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task.repository */ "./apps/api/src/app/task/task.repository.ts");
/* harmony import */ var _nestjs_typeorm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
/* harmony import */ var _nestjs_typeorm__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_nestjs_typeorm__WEBPACK_IMPORTED_MODULE_3__);
var _a;




let TaskService = class TaskService {
    constructor(taskRepository) {
        this.taskRepository = taskRepository;
    }
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
    findById(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const found = yield this.taskRepository.findOne(id);
            if (!found) {
                throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["NotFoundException"]();
            }
            return found;
        });
    }
};
TaskService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_typeorm__WEBPACK_IMPORTED_MODULE_3__["InjectRepository"])(_task_repository__WEBPACK_IMPORTED_MODULE_2__["TaskRepository"])),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof _task_repository__WEBPACK_IMPORTED_MODULE_2__["TaskRepository"] !== "undefined" && _task_repository__WEBPACK_IMPORTED_MODULE_2__["TaskRepository"]) === "function" ? _a : Object])
], TaskService);



/***/ }),

/***/ "./apps/api/src/main.ts":
/*!******************************!*\
  !*** ./apps/api/src/main.ts ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
/* harmony import */ var _nestjs_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./apps/api/src/app/app.module.ts");
/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */



function bootstrap() {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
        const app = yield _nestjs_core__WEBPACK_IMPORTED_MODULE_1__["NestFactory"].create(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);
        const globalPrefix = "api";
        app.setGlobalPrefix(globalPrefix);
        const port = process.env.port || 3333;
        yield app.listen(port, () => {
            console.log("Listening at http://localhost:" + port + "/" + globalPrefix);
        });
    });
}
bootstrap();


/***/ }),

/***/ 0:
/*!************************************!*\
  !*** multi ./apps/api/src/main.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Lenovo8gen\Documents\github\task-management\apps\api\src\main.ts */"./apps/api/src/main.ts");


/***/ }),

/***/ "@nestjs/common":
/*!*********************************!*\
  !*** external "@nestjs/common" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjs/common");

/***/ }),

/***/ "@nestjs/core":
/*!*******************************!*\
  !*** external "@nestjs/core" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjs/core");

/***/ }),

/***/ "@nestjs/typeorm":
/*!**********************************!*\
  !*** external "@nestjs/typeorm" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjs/typeorm");

/***/ }),

/***/ "tslib":
/*!************************!*\
  !*** external "tslib" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("tslib");

/***/ }),

/***/ "typeorm":
/*!**************************!*\
  !*** external "typeorm" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("typeorm");

/***/ })

/******/ })));
//# sourceMappingURL=main.js.map