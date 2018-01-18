import { TestBed, inject } from '@angular/core/testing';

import { CanActivatedAuthGuardService } from './can-activated-auth-guard.service';

describe('CanActivatedAuthGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CanActivatedAuthGuardService]
    });
  });

  it('should be created', inject([CanActivatedAuthGuardService], (service: CanActivatedAuthGuardService) => {
    expect(service).toBeTruthy();
  }));
});
