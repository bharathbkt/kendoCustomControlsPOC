import { TestBed } from '@angular/core/testing';

import { NhComponentLibraryService } from './nh-component-library.service';

describe('NhComponentLibraryService', () => {
  let service: NhComponentLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NhComponentLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
