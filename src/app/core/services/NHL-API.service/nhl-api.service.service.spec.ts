import { TestBed } from '@angular/core/testing';

import { NHLService } from './nhl-api.service.service';

describe('NHLAPI.ServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NHLService = TestBed.get(NHLService);
    expect(service).toBeTruthy();
  });
});
