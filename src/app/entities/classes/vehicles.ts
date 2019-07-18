import {BaseEntity} from './base-entity';
import {IVehicles} from '../interfaces/ivehicles';
import {People} from './people';

export class Vehicles extends BaseEntity implements IVehicles{

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
