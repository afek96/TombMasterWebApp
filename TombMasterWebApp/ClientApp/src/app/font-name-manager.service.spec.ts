import { TestBed } from '@angular/core/testing';

import { FontNameManagerService } from './font-name-manager.service';

describe('FontNameManagerService', () => {
  let service: FontNameManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FontNameManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
