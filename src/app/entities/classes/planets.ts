import {BaseEntity} from './base-entity';
import {IPlanets} from '../interfaces/iplanets';
import {People} from './people';

export class Planets extends BaseEntity implements IPlanets{

  diameter: string;
  rotation_period: string;
  orbital_period: string;
  gravity: string;
  population: string;
  climate: string;
  terrain: string;
  surface_water: string;
  residents: People[];

  constructor(item?: IPlanets) {
    super(item);
  }

}
