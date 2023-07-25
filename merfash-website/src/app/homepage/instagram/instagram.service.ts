import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Instagram, INSTAGRAM } from './instagram';
@Injectable({
    providedIn: 'root'
})
export class InstagramService {

constructor() { }

getTestimonials() : Observable<Instagram[]>{
    const instagram: Instagram[] = INSTAGRAM;
    return of (instagram);
}

getTestimonial(id: number): Observable<Instagram>{
    const instagram: Instagram[] = INSTAGRAM.filter(a => a.id === id);
    return of (instagram[0]);
}
}
