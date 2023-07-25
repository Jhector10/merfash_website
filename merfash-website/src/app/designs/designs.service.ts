import { Injectable } from '@angular/core';
import { DESIGNS, Designs } from './designs';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DesignsService {

constructor() { }
getDesigns() : Observable<Designs[]>{
  const designs: Designs[] = DESIGNS;
  return of (designs);
}

getDesign(id: number): Observable<Designs>{
  const designs: Designs[] = DESIGNS.filter(a => a.id === id);
  return of (designs[0]);
}
}
