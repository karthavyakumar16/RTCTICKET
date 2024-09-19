import { TestBed } from '@angular/core/testing';

import { ListofbusesService } from './listofbuses.service';

describe('ListofbusesService', () => {
  let service: ListofbusesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListofbusesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
