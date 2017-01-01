import {Component, Input, OnInit} from '@angular/core';
import { RouterModule, Router, ActivatedRoute , Params } from '@angular/router';
import { NgForm } from '@angular/forms';

import './../rxjs-operators';
import {User} from './../model/user.model';
import { UserService } from './../service/user.service';

@Component({
	selector:'UpdateUserForm',
	templateUrl:'./update-user.component.html',
	providers:[UserService]
})
export class UpdateUserComponent implements OnInit{
	users:User[]=[];
	selectedUser:User;
	errorMessage : String;
	mode = 'Observable';
	private id: number;
  	private sub: any;
	constructor(
		private userService : UserService,
		private router: Router,
		private route: ActivatedRoute
		){}

	ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       //console.log(params["{id}"]);
       this.userService.getUser(+params["{id}"])
                     .subscribe(
                       jokes =>{
                       	this.selectedUser = jokes
                       	//console.log(this.selectedJoke.title);
                       },
                       error =>  this.errorMessage = <any>error);
     });
    //console.log(this.sub);
  }
	update(form: NgForm){
		
		this.selectedUser.fullName =	form.value.fullName;
		this.selectedUser.email =	form.value.email;
		this.selectedUser.password =	form.value.password;
		
		
		if(!this.selectedUser.fullName) { return; }
		this.userService.update(this.selectedUser)
		.subscribe(
			user  => this.users.push(user),
			error =>  this.errorMessage = <any>error);
		//console.log(form.value.title);
		this.router.navigate(['/users']);

	}
}
