import {IVehicles} from './ivehicles';

export interface IStarships extends IVehicles{

  starship_class: string;
  hyperdrive_rating: string;
  MGLT: string;

}
