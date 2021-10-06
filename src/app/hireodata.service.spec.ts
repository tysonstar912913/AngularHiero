import { TestBed } from '@angular/core/testing';

import { HireodataService } from './hireodata.service';

describe('HireodataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HireodataService = TestBed.get(HireodataService);
    expect(service).toBeTruthy();
  });
});
