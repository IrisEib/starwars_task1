import {IBaseEntity} from './ibase-entity';
import {People} from '../classes/people';

export interface IVehicles extends IBaseEntity{

  model: string;
  vehicle_class: string;
  manufacturer: string;
  length: string;
  cost_in_credits: string;
  crew: string;
  passengers: string;
  max_atmosphering_speed: string;
  hyperdrive_rating: string;
  cargo_capacity: string;
  consumables: string;
  pilots: People[];

}
