import { TestBed } from '@angular/core/testing';

import { XchangeService } from './xchange.service';
import { HttpClientModule } from '@angular/common/http';

describe('XchangeService', () => {
  beforeEach(() => TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
      ],
      providers: [
        XchangeService
      ],
  }));

  it('should be created', () => {
    const service: XchangeService = TestBed.get(XchangeService);
    expect(service).toBeTruthy();
  });
});
