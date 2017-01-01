import { Component,  OnInit, Input, Output,  } from '@angular/core';
import { RouterModule }   from '@angular/router';
import { Router }   from '@angular/router';

import  './../rxjs-operators';
import {User} from './../model/user.model';
import { UserService } from './../service/user.service';

@Component({
	
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  providers:[UserService]
})

export class UserListComponent implements OnInit {
	  users:User[];
  	selectedUser: User;
    mode = 'Observable';
    errorMessage:String;

  constructor(
    private router: Router,
    private userService: UserService) { }

  ngOnInit(): void {
    this.getJokes();
    this.selectedUser = new User();   
  }

  getJokes() {
    this.userService.getUsers()
                     .subscribe(
                       users =>this.users = users,
                       error =>  this.errorMessage = <any>error);                   
  }
  delete(user: User): void {
    this.userService
    .delete(user.id)
    .subscribe(() => {
      this.users = this.users.filter(h => h !== user);
      if (this.selectedUser === user) { this.selectedUser = null; }
    });
  }
  
  
}