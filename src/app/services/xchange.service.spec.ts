import { TestBed } from '@angular/core/testing';

import { XchangeService } from './xchange.service';

describe('XchangeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: XchangeService = TestBed.get(XchangeService);
    expect(service).toBeTruthy();
  });
});
