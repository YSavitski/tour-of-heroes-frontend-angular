import { Component, OnInit } from '@angular/core';
import { Hero } from '../Hero';
import {HeroService} from '../hero.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];

  constructor(
    private router: Router,
    private heroService: HeroService
  ) { }

  getHeroes(): void {
    this.heroService.getHeroes().toPromise()
      .then(
        heroes => this.heroes = heroes,
        error => {
          this.router.navigate(['login']);
          console.error('An error occurred in dashboard component, navigating to login: ', error);
        }
      );
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({name} as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      })
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }

  ngOnInit() {
    this.getHeroes()
  }

}
