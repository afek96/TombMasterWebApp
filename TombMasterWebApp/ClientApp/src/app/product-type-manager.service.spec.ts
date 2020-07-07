import { TestBed } from '@angular/core/testing';

import { ProductTypeManagerService } from './product-type-manager.service';

describe('ProductTypeManagerService', () => {
  let service: ProductTypeManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductTypeManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
