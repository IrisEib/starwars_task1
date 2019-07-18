import {IBaseEntity} from '../interfaces/ibase-entity';
import {Films} from './films';

export abstract class BaseEntity implements IBaseEntity {
  name: string;
  films: Films[];
  url: string;
  created: string;
  edited: string;

  protected constructor(item?: IBaseEntity) {
    if (item !== undefined) {
      for (const key of Object.keys(item)) {
        try {

          this[key] = item[key];
        } catch (e) {
        }
      }
    }
  }

}
