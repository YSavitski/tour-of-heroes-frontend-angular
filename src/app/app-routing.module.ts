import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HeroesComponent} from './heroes/heroes.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {CanActivatedAuthGuardService} from './can-activated-auth-guard.service';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'heroes',
    component: HeroesComponent,
    canActivate: [CanActivatedAuthGuardService]
  },
  {
    path: 'heroes/:id',
    component: HeroDetailComponent,
    canActivate: [CanActivatedAuthGuardService]
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [CanActivatedAuthGuardService]
  }
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forRoot(routes)
  ]
})

export class AppRoutingModule { }
