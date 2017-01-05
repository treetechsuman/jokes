import { Injectable } from '@angular/core';
import { Http, Jsonp,Response,  URLSearchParams} from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

//import 'rxjs/add/operator/toPromise';

import { Joke } from './../model/joke.model';
import { Observable }     from 'rxjs/Observable';

// Statics
import 'rxjs/add/observable/throw';

// Operators
import 'rxjs/add/operator/catch';

@Injectable()
export class JokeService {
	private headers = new Headers({'Content-Type': 'application/json'});

	private jokeUrl = 'api/jokes';  // URL to web api

	constructor(private http: Http) { }

	getJokes (): Observable<Joke[]> {	
	 //console.log('conthere');	
    	return this.http.get(this.jokeUrl)
                    .map(this.extractData)
                    .catch(this.handleError);

  	}

  	getJoke(id: number): Observable<Joke> {
  		const url = `${this.jokeUrl}/${id}`;
  		return this.http.get(url)
  		.map(this.extractData)
  		.catch(this.handleError);
  	}

  	
  	create( joke: Joke): Observable<Joke> {
  		let headers = new Headers({ 'Content-Type': 'application/json' });
  		let options = new RequestOptions({ headers: headers });
  		return this.http.post(this.jokeUrl, JSON.stringify(joke), options)
  		.map(this.extractData)
  		.catch(this.handleError);
  	} 

	update(joke: Joke): Observable<Joke> {
		//alert('djhkjhd');
		const url = `${this.jokeUrl}/${joke.id}`;
		return this.http.put(url, JSON.stringify(joke), {headers: this.headers})
					.map(this.extractData)
                    .catch(this.handleError);
	}

	delete(id: number): Observable<void> {
		const url = `${this.jokeUrl}/${id}`;
		return this.http.delete(url, {headers: this.headers})
					.map((res: Response) => {
                		return;
		            })
		            .catch(this.handleError);
	}

	private extractData(res: Response) {
		//console.log(res.json());
		let body = res.json();
		//console.log(body.data) || { };
		return body.data || { };
	}

	private handleError (error: Response | any) {
		// In a real world app, we might use a remote logging infrastructure
		let errMsg: string;
		if (error instanceof Response) {
			const body = error.json() || '';
			const err = body.error || JSON.stringify(body);
			errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
		} else {
			errMsg = error.message ? error.message : error.toString();
		}
		//console.error(errMsg);
		return Observable.throw(errMsg);
	}

}