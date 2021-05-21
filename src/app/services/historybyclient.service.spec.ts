import { TestBed } from '@angular/core/testing';

import { HistorybyclientService } from './historybyclient.service';

describe('HistorybyclientService', () => {
  let service: HistorybyclientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HistorybyclientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
