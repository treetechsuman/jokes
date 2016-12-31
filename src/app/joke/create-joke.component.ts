import {Component , OnInit} from '@angular/core'
import { RouterModule }   from '@angular/router';
import { Router }   from '@angular/router';
import {NgForm } from '@angular/forms';



import  './../rxjs-operators';
import {Joke} from './../model/joke.model';
import { JokeService } from './../service/joke.service';

@Component({
	selector:'createjoke',
	templateUrl:'./create-joke.component.html',
	providers:[JokeService]
})
export class CreateJokeComponent implements OnInit{
	jokes:Joke[]=[];
	joke:Joke;
	mode = 'Observable';
	errorMessage;
	constructor(
		private jokeService: JokeService,
		private router: Router
		){}

	ngOnInit() {
    	this.joke = new Joke();
  	}
	store(form: NgForm) {
		
		//this.joke.id = 22;
		this.joke.title = form.value.title;
		this.joke.content = form.value.content;
		this.joke.by = form.value.by;
		this.joke.like = 0;
		this.joke.disLike = 0;

		
    if (!form.value.title) { return; }
    this.jokeService.create(this.joke)
    .subscribe(
      joke  => this.jokes.push(joke),
      error =>  this.errorMessage = <any>error);
      //console.log(form.value.title);
      this.router.navigate(['/joke']);
  }
	
	
}