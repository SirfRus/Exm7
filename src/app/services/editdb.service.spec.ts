import { TestBed } from '@angular/core/testing';

import { EditdbService } from './editdb.service';

describe('EditdbService', () => {
  let service: EditdbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditdbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
