import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: 'Bài Tập C' },
      { id: 2, name: 'Bài Tập C++' },
      { id: 3, name: 'Bài Tập Java' },
      { id: 4, name: 'Bài Tập JavaScript' },
      { id: 5, name: 'Bài Tập Angular' },
      { id: 6, name: 'Bài Tập Word' },
      { id: 7, name: 'Bài Tập Excel' },
      { id: 8, name: 'Bài Tập HTML' },
      { id: 9, name: 'Bài Tập CSS' },
      { id: 10, name: 'Bài Tập Font-end' },
      { id: 11, name: 'Bài Tập C#' },
      { id: 12, name: 'Bài Tập .NET ' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}