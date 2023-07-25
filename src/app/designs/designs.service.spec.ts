/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DesignsService } from './designs.service';

describe('Service: Designs', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DesignsService]
    });
  });

  it('should ...', inject([DesignsService], (service: DesignsService) => {
    expect(service).toBeTruthy();
  }));
});
