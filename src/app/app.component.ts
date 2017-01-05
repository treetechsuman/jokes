import {Component} from '@angular/core';
import {Config} from './app.config';
import { Router }   from '@angular/router';

import { MenuComponent } from './menu/menu.component';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',

})
export class AppComponent {
	appName = Config.AppName;
	constructor(
		public router: Router
		) {}  
	
	logout(){
		localStorage.setItem('id_token', '');
		this.router.navigate(['/login']);
	}
}
