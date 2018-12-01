import { BaseMiddleware, Middleware, MiddlewareFunctionParams } from "protontype";

export class TasksMiddleware extends BaseMiddleware {

    @Middleware()
    sayHello(params: MiddlewareFunctionParams) {
        console.log("Hello!");
        console.log(params.req.body);
        params.next();
    }
}