import { Component,  OnInit, Input, Output,  } from '@angular/core';
import { RouterModule }   from '@angular/router';
import { Router }   from '@angular/router';

import  './../rxjs-operators';
import {Joke} from './../model/joke.model';
import { JokeService } from './../service/joke.service';

@Component({
	
  selector: 'login',
  templateUrl: './login.component.html',
 
})
export class LoginComponent  {
	
	
}