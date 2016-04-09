import {Component} from 'angular2/core';
import {HeroComponent} from './hero.component';
import {HeroService} from './hero.service';
import {Hero} from './hero';
import {HeroPipe} from './hero.pipe';

@Component({
    selector: 'heroes',
    template: `
    <h1>Heroes</h1>
    <input type="text" [(ngModel)]="filter">
    <ul *ngIf="heroes">
        <li *ngFor="#hero of heroes | heroFilter:filter">
            <hero [hero]="hero"></hero>
        </li>
    </ul>
    `,
    directives: [HeroComponent],
    providers: [HeroService],
    pipes: [HeroPipe]
})
export class HeroesComponent {
    private heroes : Array<Hero>;
    private filter : string;
    constructor(private service : HeroService) {
        service.findHereos().subscribe(heroes => this.heroes = heroes);
    }
}