import { TestBed } from '@angular/core/testing';

import { ClipsDbjsonService } from './clips-dbjson.service';

describe('ClipsDbjsonService', () => {
  let service: ClipsDbjsonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClipsDbjsonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
