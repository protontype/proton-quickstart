import { ParticlesRouter } from './ParticlesRouter';
import { ExpressApplication } from 'protontype';

new ExpressApplication()
    .addRouter(new ParticlesRouter())
    .bootstrap();