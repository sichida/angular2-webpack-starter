import {Pipe, PipeTransform} from 'angular2/core';
import {Hero} from './hero';

@Pipe({name: 'heroFilter'})
export class HeroPipe implements PipeTransform {
    isNameMatching(hero:Hero, name) : boolean {
        return hero.name.toLowerCase().indexOf((name || '').toLowerCase()) != -1;
    }
    transform(heroes:Array<Hero>, args):Array<Hero> {
        console.log('heroes', heroes);
        return heroes.filter(hero => this.isNameMatching(hero, args[0]));
    }
}