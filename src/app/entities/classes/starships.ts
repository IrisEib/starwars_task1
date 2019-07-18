import {IStarships} from '../interfaces/istarships';
import {Vehicles} from './vehicles';

export class Starships extends Vehicles implements IStarships{

  starship_class: string;
  hyperdrive_rating: string;
  MGLT: string;

  constructor(item?: IStarships) {
    super(item);
  }

}
