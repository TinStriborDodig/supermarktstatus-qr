import { TestBed } from '@angular/core/testing';

import { SupermarketDistanceService } from './supermarket-distance.service';

describe('SupermarketDistanceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SupermarketDistanceService = TestBed.get(SupermarketDistanceService);
    expect(service).toBeTruthy();
  });
});
