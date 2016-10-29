import { BaseModel, SequelizeBaseModelAttr, Model, DataTypes } from 'protontype';

@Model({
    name: "Particles",
    definition: {
        name: {
            type: DataTypes.STRING
        },
        symbol: {
            type: DataTypes.STRING
        },
        mass: {
            type: DataTypes.BIGINT
        }

    }
})
export class ParticlesModel extends BaseModel<Particle> {

}

export interface Particle extends SequelizeBaseModelAttr {
    name: string;
    symbol: string;
    mass: number;
}