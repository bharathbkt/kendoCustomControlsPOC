import { TestBed } from '@angular/core/testing';

import { NhCompLibService } from './nh-comp-lib.service';

describe('NhCompLibService', () => {
  let service: NhCompLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NhCompLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
