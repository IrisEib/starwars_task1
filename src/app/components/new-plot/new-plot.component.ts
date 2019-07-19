import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Films} from '../../entities/classes/films';
import {Observable} from 'rxjs';
import {FilmsService} from '../../services/films.service';
import {People} from '../../entities/classes/people';
import {PeopleService} from '../../services/people.service';
import {Planets} from '../../entities/classes/planets';
import {Species} from '../../entities/classes/species';
import {Starships} from '../../entities/classes/starships';
import {DataService} from '../../services/data.service';
import {Vehicles} from '../../entities/classes/vehicles';

@Component({
  selector: 'app-new-plot',
  templateUrl: './new-plot.component.html',
  styleUrls: ['./new-plot.component.css'],
})
export class NewPlotComponent implements OnInit {
  public filmFields: object = { text: 'title', value: 'episode_id' };
  public filmPlaceholder = 'Select movies';

  public peopleFields: object = { text: 'name', value: 'birth_year' };
  public peoplePlaceholder = 'Select characters';

  public planetsFields: object = { text: 'name' };
  public planetsPlaceholder = 'Select planets';

  public speciesFields: object = { text: 'name' };
  public speciesPlaceholder = 'Select species';

  public starshipsFields: object = { text: 'name' };
  public starshipsPlaceholder = 'Select starships';

  public vehiclesFields: object = { text: 'name' };
  public vehiclesPlaceholder = 'Select vehicles';

  constructor(private filmsService: FilmsService,
              private peopleService: PeopleService,
              private dataService: DataService) { }

  films: Observable<Films[]>;
  people: Observable<People[]>;
  planets: Observable<Planets[]>;
  species: Observable<Species[]>;
  starships: Observable<Starships[]>;
  vehicles: Observable<Vehicles[]>;

  ngOnInit() {
    this.films = this.filmsService.getFilms();
    this.people = this.peopleService.getPeople();
    this.planets = this.dataService.getPlanets();
    this.species = this.dataService.getSpecies();
    this.starships = this.dataService.getStarships();
    this.vehicles = this.dataService.getVehicles();
  }

  onSubmit(form: NgForm): void {
    console.log(form.value.name);
  }


}
