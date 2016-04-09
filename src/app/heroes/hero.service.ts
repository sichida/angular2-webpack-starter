import {Hero} from './hero';
import {Observable} from 'rxjs';
import {Http} from 'angular2/http';
import {Injectable} from 'angular2/core';

@Injectable()
export class HeroService {
    private _heroesUrl_ : string = 'http://ggaulard.github.io/workshop/heroes';
    
    constructor(private http:Http) {}
    
    findHereos(): Observable<Array<Hero>> {
        return this.http.get(this._heroesUrl_).map(res => res.json());
    }
}