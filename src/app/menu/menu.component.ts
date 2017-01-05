import { Component, OnInit  } from '@angular/core';
import { RouterModule }   from '@angular/router';
import { Router }   from '@angular/router';
import { NgForm }   from '@angular/forms';
import { Observable }     from 'rxjs/Observable';

import  './../rxjs-operators';
import {User} from './../model/user.model';
import { UserService } from './../service/user.service';
import {Token} from './../model/token.model';

@Component({
	
  selector: 'menu',
  templateUrl: './menu.component.html',
 
})
export class MenuComponent implements OnInit {
	token: Token;
	tokenString:string;
	constructor(
		public router: Router,
		private userService: UserService
		) {}  
	ngOnInit(): void {
    
   
  }
	/*login(form: NgForm){
		alert('login called');
		this.userService.login(form.value.email,form.value.password)
		.subscribe(

	        token =>{
	        	this.token = token;
	        	//localStorage.setItem('id_token', token.json().id_token);
	        	//console.log(this.token.0.['id_token']);	        	
	        },
	        error => {
	          alert(error.text());
	          console.log(error.text());
	        }
	      );
		this.router.navigate(['/joke']);
	}*/
	login(form: NgForm){
		let id_token = this.userService.login(form.value.email,form.value.password)
		localStorage.setItem('id_token', id_token);
		console.log(localStorage.getItem('id_token'))
	}
	
}