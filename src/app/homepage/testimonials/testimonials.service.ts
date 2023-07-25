import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Testimonials, TESTIMONIALS } from './testimonials';
@Injectable({
    providedIn: 'root'
})
export class TestimonialsService {

constructor() { }

getTestimonials() : Observable<Testimonials[]>{
    const testimonials: Testimonials[] = TESTIMONIALS;
    return of (testimonials);
}

getTestimonial(id: number): Observable<Testimonials>{
    const testimonials: Testimonials[] = TESTIMONIALS.filter(a => a.id === id);
    return of (testimonials[0]);
}
}
