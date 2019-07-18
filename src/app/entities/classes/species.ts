import {BaseEntity} from './base-entity';
import {ISpecies} from '../interfaces/ispecies';
import {People} from './people';

export class Species extends BaseEntity implements ISpecies{

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

  constructor(item?: ISpecies) {
    super(item);
  }

}
