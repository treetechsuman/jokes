import {Component} from '@angular/core';
import {Config} from './app.config';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
})
export class AppComponent {
	appName = Config.AppName;
}
