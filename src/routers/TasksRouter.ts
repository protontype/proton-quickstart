import { CrudRouter, RouterClass } from 'protontype';
import { TasksMiddleware } from '../middlewares/TasksMiddleware';
import { TasksModel } from '../models/TasksModel';


@RouterClass({
    baseUrl: "/tasks",
    model: TasksModel,
    middlewares: [new TasksMiddleware()]
})
export class TasksRouter extends CrudRouter {

}