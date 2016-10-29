import { ParticlesModel } from './ParticlesModel';
import { BaseCrudRouter, RouterClass } from 'protontype';

@RouterClass({
    baseUrl: '/particles',
    modelInstances: [new ParticlesModel()]
})
export class ParticlesRouter extends BaseCrudRouter {

}