import {IBaseEntity} from './ibase-entity';
import {People} from '../classes/people';

export interface ISpecies extends IBaseEntity{

  classification: string;
  designation: string;
  average_height: string;
  average_lifespan: string;
  eye_colors: string;
  hair_colors: string;
  skin_colors: string;
  language: string;
  homeworld: string;
  people: People[];

}
