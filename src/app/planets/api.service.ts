import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

import { PlanetService } from './planet.service';
import { Planet } from './planet.model';

@Injectable()
export class ApiService {
    // urls = [];

  constructor(private http: Http, private planetService: PlanetService) {}

  // apiGetUrls() {
  //   for (let i = 0; i < 8; i++) {
  //    this.urls = this.urls.concat(`https://swapi.co/api/planets/?page=${i}`);
  //   }
  //   console.log(this.urls);
  //   return this.urls;
  // }

  apiGetPlanets() {
    let planets: Planet[] = [];
    for (let i = 1; i < 8; i++) {
    this.http.get(`https://swapi.co/api/planets/?page=${i}`)
      .map(
        (response: Response) => {
        planets = planets.concat(response.json().results);
        // console.log(planets);
        return planets;
      }).subscribe(
        (planets: Planet[]) => {
        this.planetService.setPlanets(planets);
        }
      );
    }
  }


  // apiGetPlanets() {
  //   let planets: Planet[] = [];
  //   for (let i = 1; i < 8; i++) {
  //   this.http.get(`https://swapi.co/api/planets/?page=${i}`)
  //     .subscribe(
  //       (response: Response) => {
  //           console.log(planets);
  //           planets = planets.concat(response.json().results);
  //           console.log(planets);
  //           this.planetService.setPlanets(planets);
  //       }
  //     );
  //   }
  // }
}
