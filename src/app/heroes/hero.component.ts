import {Component, Input} from 'angular2/core';
import {Hero} from './hero'

@Component({
    selector: 'hero',
    template: `
    <span>{{hero.name}}</span>
    <img src="{{hero.picture}}" width="150px">
    `
})
export class HeroComponent {
    @Input()
    hero : Hero;
}