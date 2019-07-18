import {Films} from '../classes/films';

export interface IBaseEntity {
  name: string;
  films: Films[];
  url: string;
  created: string;
  edited: string;
}
