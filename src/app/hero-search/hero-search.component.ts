import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Hero} from '../Hero';
import {Subject} from 'rxjs/Subject';
import {HeroService} from '../hero.service';
import {debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css']
})
export class HeroSearchComponent implements OnInit {
  heroes$: Observable<Hero[]>;
  private searchTerms = new Subject<string>();

  constructor(private heroService: HeroService) { }

  searchByName(name: string): void {
    this.searchTerms.next(name);
  }

  ngOnInit() {
    this.heroes$ = this.searchTerms.pipe(
      debounceTime(100),
      distinctUntilChanged(),
      switchMap((name: string) => this.heroService.searchHeroesByName(name))
    )
  }

}
