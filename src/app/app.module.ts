import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';
import { AppComponent } from './app.component';
import { GithubService } from './github/shared/github.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { CKEditorModule } from 'ng2-ckeditor';

import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { JokeListComponent} from './joke/joke-list.component';
import { RepoBrowserComponent } from './github/repo-browser/repo-browser.component';
import { RepoListComponent } from './github/repo-list/repo-list.component';
import { RepoDetailComponent } from './github/repo-detail/repo-detail.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { ContactComponent } from './contact/contact.component';
import  {CreateJokeComponent} from './joke/create-joke.component';
import  {UpdateJokeComponent} from './joke/update-joke.component';
import  {LoginComponent} from './user/login.component';
import  {SignupComponent} from './user/signup.component';
import  {UserListComponent} from './user/user-list.component';
import  {UpdateUserComponent} from './user/update-user.component';
import { MenuComponent } from './menu/menu.component';

import {JokeService} from './service/joke.service';
import {UserService} from './service/user.service';
import {AuthGuardService} from './service/auth-gard.service';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule, InMemoryBackendService } from 'angular2-in-memory-web-api';
import { InMemoryDataService }  from './service/in-memory-data.service';
import { InMemoryUserDataService }  from './service/in-memory-user-date.service';
@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    RepoBrowserComponent,
    RepoListComponent,
    RepoDetailComponent,
    HomeComponent,
    JokeListComponent,
    ContactComponent,
    CreateJokeComponent,
    UpdateJokeComponent,
    LoginComponent,
    SignupComponent,
    UserListComponent,
    UpdateUserComponent,
    MenuComponent,

    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: true }),
    InMemoryWebApiModule.forRoot(InMemoryDataService),
  
    CKEditorModule,
  ],
  providers: [
    GithubService,
    JokeService,
    UserService,
    AuthGuardService,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {

}
