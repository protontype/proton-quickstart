import { RouterClass, TypeORMCrudRouter, BodyParserMiddleware } from 'protontype';

import { TasksModel } from '../models/TasksModel';
import { TasksMiddleware } from '../middlewares/TasksMiddleware';

@RouterClass({
    baseUrl: "/tasks",
    model: TasksModel,
    middlewares: [new TasksMiddleware()]
})
export class TasksRouter extends TypeORMCrudRouter {

}