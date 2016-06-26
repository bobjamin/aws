import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Headers, Http } from '@angular/http';
import { Card } from '../card';

@Injectable()
export class CardService {

	cards: Card[] = [
    {title: 'bob'},
    {title: 'fred'}
  ];

	constructor(private http: Http) { }

	getCards(): Promise<Hero[]> {
    //return this.http.get(this.heroesUrl)
       //        .toPromise()
         //      .then(response => response.json())
           //    .catch(this.handleError);
      return Promise.resolve(this.cards);
  	}
  	
	private handleError(error: any) {
  		console.error('An error occurred', error);
  		return Promise.reject(error.message || error);
	}
}