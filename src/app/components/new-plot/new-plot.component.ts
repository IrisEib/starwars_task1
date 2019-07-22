import { Component, OnInit } from '@angular/core';
import {Films} from '../../entities/classes/films';
import { Observable } from 'rxjs';
import {FilmsService} from '../../services/films.service';
import {People} from '../../entities/classes/people';
import {Planets} from '../../entities/classes/planets';
import {Starships} from '../../entities/classes/starships';
import {DataService} from '../../services/data.service';


@Component({
  selector: 'app-new-plot',
  templateUrl: './new-plot.component.html',
  styleUrls: ['./new-plot.component.css'],
  providers: []
})
export class NewPlotComponent implements OnInit {

  results: Object;

  public filmFields: object = { text: 'title', value: 'episode_id' };
  public filmPlaceholder = 'Select movies';

  public peopleFields: object = { text: 'name', value: 'birth_year' };
  public peoplePlaceholder = 'Select characters';

  public planetsFields: object = { text: 'name' };
  public planetsPlaceholder = 'Select planets';

  public starshipsFields: object = { text: 'name' };
  public starshipsPlaceholder = 'Select starships';

  constructor(private filmsService: FilmsService,
              private dataService: DataService) {
  }

  films: Observable<Films[]>;
  people: People[] = [];
  planets: Planets[] = [];
  starships: Starships[] = [];

  ngOnInit() {
    this.films = this.filmsService.getFilms();
    let peopleUrl = "https://swapi.co/api/people/?page=1";
    this.getPeople(peopleUrl);
    let planetsUrl = "https://swapi.co/api/planets/?page=1";
    this.getPlanets(planetsUrl);
    let starshipsUrl = "https://swapi.co/api/starships/?page=1";
    this.getStarships(starshipsUrl);
  }

  getPlanets(nextUrl){
    if(nextUrl){
      this.dataService.getPlanets(nextUrl).subscribe(data => {
        for (const result of data["results"]) {
          this.planets.push(result);
        }
        this.getPlanets(data["next"]);
      })
    }
  }

  getPeople(nextUrl){
    if(nextUrl){
      this.dataService.getPeople(nextUrl).subscribe(data => {
        for (const result of data["results"]) {
          this.people.push(result);
        }
        this.getPeople(data["next"]);
      })
    }
  }

  getStarships(nextUrl){
    if(nextUrl){
      this.dataService.getStarships(nextUrl).subscribe(data => {
        for (const result of data["results"]) {
          this.starships.push(result);
        }
        this.getStarships(data["next"]);
      })
    }
  }

}
