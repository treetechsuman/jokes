import {Component, Input, OnInit} from '@angular/core';
import { RouterModule, Router, ActivatedRoute , Params } from '@angular/router';
import { NgForm } from '@angular/forms';

import './../rxjs-operators';
import {Joke} from './../model/joke.model';
import { JokeService } from './../service/joke.service';

@Component({
	selector:'UpdateJokeForm',
	templateUrl:'./update-joke.component.html',
	providers:[JokeService]
})
export class UpdateJokeComponent implements OnInit{
	jokes:Joke[]=[];
	selectedJoke:Joke;
	errorMessage;
	mode = 'Observable';
	private id: number;
  	private sub: any;
	constructor(
		private jokeService : JokeService,
		private router: Router,
		private route: ActivatedRoute
		){}

	ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       //console.log(params["{id}"]);
       this.jokeService.getJoke(+params["{id}"])
                     .subscribe(
                       jokes =>{
                       	this.selectedJoke = jokes
                       	//console.log(this.selectedJoke.title);
                       },
                       error =>  this.errorMessage = <any>error);
     });
    //console.log(this.sub);
  }
	update(form: NgForm){
		
		this.selectedJoke.title =	form.value.title;
		this.selectedJoke.content =	form.value.content;
		this.selectedJoke.by =	form.value.by;
		
		
		if(!this.selectedJoke.title) { return; }
		this.jokeService.update(this.selectedJoke)
		.subscribe(
			joke  => this.jokes.push(joke),
			error =>  this.errorMessage = <any>error);
		//console.log(form.value.title);
		this.router.navigate(['/joke']);

	}
}
