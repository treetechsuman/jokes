import { Component,  OnInit, Input, Output,   } from '@angular/core';
import { RouterModule }   from '@angular/router';
import { Router }   from '@angular/router';
import {NgForm } from '@angular/forms';

import  './../rxjs-operators';
import {User} from './../model/user.model';
import { UserService } from './../service/user.service';

@Component({
	
  selector: 'signup',
  templateUrl: './signup.component.html',
 
})
export class SignupComponent implements OnInit  {
	users:User[]=[];
	user:User;
	mode = 'Observable';
	errorMessage:String;
	constructor(
		private userService: UserService,
		private router: Router
		){}

	ngOnInit() {
    	this.user = new User();
  	}
	store(form: NgForm) {
		//this.joke.id = 22;
		this.user.fullName = form.value.fullName;
		this.user.email = form.value.email;
		this.user.password = form.value.by;
		this.user.status = true;
		
    if (!form.value.fullName) { return; }
    this.userService.create(this.user)
    .subscribe(
      user  => this.users.push(user),
      
      error =>  this.errorMessage = <any>error,
     );
      //console.log(form.value.title);
      this.router.navigate(['/users']);
  }
  /*response =>{
          localStorage.setItem('id_token', response.json().id_token);
          this.router.navigate(['home']);
        },*/
	
	
}