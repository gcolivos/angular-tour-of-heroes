import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';

import { Hero } from './hero';
import {HEROES} from './mock-heroes';

import {MessageService} from './message.service';

@Injectable()
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    // To do: send message _AFTER_ fetching Heroes
    this.messageService.add('HeroService: fetched all heroes');
    return of(HEROES);
  }

  getHero(id: number): Observable<Hero> {
    //To-do: send message _after_ fetching Hero
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }
}
