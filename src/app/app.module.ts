import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import {FormsModule} from '@angular/forms';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import {HeroService} from './hero.service';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import {HttpClientModule} from '@angular/common/http';
/*import {HttpClientInMemoryWebApiModule, InMemoryDbService} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './InMemoryDataService';*/
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthenticationService } from './authentication.service';
import { CanActivatedAuthGuardService } from './can-activated-auth-guard.service';


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    HeroSearchComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule/*,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {dataEncapsulation: false})*/
  ],
  providers: [
    HeroService,
    MessageService,
    AuthenticationService,
    CanActivatedAuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
