import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DesignTypes, DESIGNTYPES } from './design-types';
@Injectable({
    providedIn: 'root'
})
export class DesignTypesService {

constructor() { }

getDesignTypes() : Observable<DesignTypes[]>{
    const designTypes: DesignTypes[] = DESIGNTYPES;
    return of (designTypes);
}

getDesignType(id: number): Observable<DesignTypes>{
    const designTypes: DesignTypes[] = DESIGNTYPES.filter(a => a.id === id);
    return of (designTypes[0]);
}
}
