import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { tokenNotExpired } from 'angular2-jwt';


@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(private router: Router) {}

  canActivate() {
    /*if (tokenNotExpired()) {
      return true;
    }*/
    //alert(localStorage.getItem('id_token'));
    if( localStorage.getItem('id_token')== 'sldfjsdlfjlksdfj'){
    	return true;
    }
    alert('please Login First!!');
    this.router.navigate(['/login']);
    
    return false;
  }
}