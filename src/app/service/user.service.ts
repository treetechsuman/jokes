import { Injectable } from '@angular/core';
import { Http, Jsonp,Response,  URLSearchParams} from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

//import 'rxjs/add/operator/toPromise';

import { User } from './../model/user.model';
import { Token } from './../model/token.model';
import { Observable }     from 'rxjs/Observable';

// Statics
import 'rxjs/add/observable/throw';

// Operators
import 'rxjs/add/operator/catch';


@Injectable()
export class UserService {
	private headers = new Headers({'Content-Type': 'application/json'});

	private userUrl = 'app/users';  // URL to web api

	constructor(private http: Http) { }

	/*login( email:String, password:String): Observable <Token> {
		let headers = new Headers({ 'Content-Type': 'application/json' });
  		let options = new RequestOptions({ headers: headers });
	    event.preventDefault();
	    let body = JSON.stringify({ email, password });
	    return this.http.post('app/tokens', body, options)
	     	.map(this.extractData)
            .catch(this.handleError);
        return this.http.get('app/tokens')
	     	.map(this.extractData)
            .catch(this.handleError);
             

	      //localStorage.setItem('id_token', 'wowlogin');
	      //alert(localStorage.getItem('id_token'));
    }*/

    login(email:String, password:String){
    	return 'sldfjsdlfjlksdfj';
    }

	getUsers (): Observable<User[]> {		
    	return this.http.get(this.userUrl)
                    .map(this.extractData)
                    .catch(this.handleError);
  	}

  	getUser(id: number): Observable<User> {
  		const url = `${this.userUrl}/${id}`;
  		return this.http.get(url)
  		.map(this.extractData)
  		.catch(this.handleError);
  	}

  	create( user: User): Observable<User> {
  		let headers = new Headers({ 'Content-Type': 'application/json' });
  		let options = new RequestOptions({ headers: headers });
  		return this.http.post(this.userUrl, JSON.stringify(user), options)
  		.map(this.extractData)
  		.catch(this.handleError);
  	} 

	update(user: User): Observable<User> {
		const url = `${this.userUrl}/${user.id}`;
		return this.http.put(url, JSON.stringify(user), {headers: this.headers})
					.map(this.extractData)
                    .catch(this.handleError);
	}

	delete(id: number): Observable<void> {
		const url = `${this.userUrl}/${id}`;
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