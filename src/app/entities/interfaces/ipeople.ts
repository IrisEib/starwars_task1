import {IBaseEntity} from './ibase-entity';
import {Starships} from '../classes/starships';
import {Vehicles} from '../classes/vehicles';

export interface IPeople extends IBaseEntity {

  birth_year: string;
  eye_color: string;
  gender: string;
  hair_color: string;
  height: string;
  mass: string;
  skin_color: string;
  homeworld: string;
  species: string[];
  starships: Starships[];
  vehicles: Vehicles[];

}
