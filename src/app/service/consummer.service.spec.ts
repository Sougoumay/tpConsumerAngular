import { TestBed } from '@angular/core/testing';

import { ConsummerService } from './consummer.service';
import { provideHttpClient } from '@angular/common/http';

describe('ConsummerService', () => {
  let service: ConsummerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient()]
    });
    service = TestBed.inject(ConsummerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
