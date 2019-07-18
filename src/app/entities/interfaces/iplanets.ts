import {IBaseEntity} from './ibase-entity';
import {People} from '../classes/people';

export interface IPlanets extends IBaseEntity {

  diameter: string;
  rotation_period: string;
  orbital_period: string;
  gravity: string;
  population: string;
  climate: string;
  terrain: string;
  surface_water: string;
  residents: People[];

}
