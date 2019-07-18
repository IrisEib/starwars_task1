import {BaseEntity} from './base-entity';
import {IPeople} from '../interfaces/ipeople';
import {Starships} from './starships';
import {Vehicles} from './vehicles';

export class People extends BaseEntity implements IPeople {

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

  constructor(item?: IPeople) {
    super(item);
  }

}
