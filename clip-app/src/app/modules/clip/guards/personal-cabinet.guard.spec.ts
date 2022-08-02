import { TestBed } from '@angular/core/testing';

import { PersonalCabinetGuard } from './personal-cabinet.guard';

describe('PersonalCabinetGuard', () => {
  let guard: PersonalCabinetGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PersonalCabinetGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
