import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Films} from '../../entities/classes/films';
import {Observable} from 'rxjs';
import {FilmsService} from '../../services/films.service';
import {People} from '../../entities/classes/people';
import {PeopleService} from '../../services/people.service';

@Component({
  selector: 'app-new-plot',
  templateUrl: './new-plot.component.html',
  styleUrls: ['./new-plot.component.css'],
})
export class NewPlotComponent implements OnInit {
  public filmFields: object = { text: 'title', value: 'episode_id'};
  public filmPlaceholder = 'Select movies';

  public peopleFields: object = { text: 'name', value: 'birth_year'};
  public peoplePlaceholder = 'Select Characters';

  constructor(private filmsService: FilmsService,
              private peopleService: PeopleService) { }

  films: Observable<Films[]>;
  people: Observable<People[]>;

  ngOnInit() {
    this.films = this.filmsService.getFilms();
    this.people = this.peopleService.getPeople();
  }

  onSubmit(form: NgForm): void {
    console.log(form.value.name);
  }


}
