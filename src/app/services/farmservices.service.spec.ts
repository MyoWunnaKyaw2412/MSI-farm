import { TestBed } from '@angular/core/testing';

import { FarmservicesService } from './farmservices.service';

describe('FarmservicesService', () => {
  let service: FarmservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FarmservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
