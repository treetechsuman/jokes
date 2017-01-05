import { Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { RepoBrowserComponent } from './github/repo-browser/repo-browser.component';
import { RepoListComponent } from './github/repo-list/repo-list.component';
import { RepoDetailComponent } from './github/repo-detail/repo-detail.component';
import { ContactComponent } from './contact/contact.component';
import {JokeListComponent} from './joke/joke-list.component';
import  {CreateJokeComponent} from './joke/create-joke.component';
import  {UpdateJokeComponent} from './joke/update-joke.component';
import  {LoginComponent} from './user/login.component';
import  {SignupComponent} from './user/signup.component';
import  {UserListComponent} from './user/user-list.component';
import  {UpdateUserComponent} from './user/update-user.component';

import {AuthGuardService} from './service/auth-gard.service';



export const rootRouterConfig: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'joke', component: JokeListComponent , canActivate: [AuthGuardService]},
  { path: 'create-joke', component: CreateJokeComponent, canActivate: [AuthGuardService]},
  { path: 'joke/update-joke/:{id}', component: UpdateJokeComponent, canActivate: [AuthGuardService] },
  { path: 'about', component: AboutComponent },
  { path: 'github', component: RepoBrowserComponent,
    children: [
      { path: '', component: RepoListComponent },
      { path: ':org', component: RepoListComponent,
        children: [
          { path: '', component: RepoDetailComponent },
          { path: ':repo', component: RepoDetailComponent }
        ]
      }]
  },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'users', component: UserListComponent },
  { path: 'users/update-user/:{id}', component: UpdateUserComponent},
];

