import { TasksRouter } from './routers/TasksRouter';
import { ProtonApplication } from 'protontype';
/**
 * @author Humberto Machado
 *
 */
new ProtonApplication()
    .addRouter(new TasksRouter())
    .start();