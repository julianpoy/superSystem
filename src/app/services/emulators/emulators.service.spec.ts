/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EmulatorsService } from './emulators.service';

describe('EmulatorsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmulatorsService]
    });
  });

  it('should ...', inject([EmulatorsService], (service: EmulatorsService) => {
    expect(service).toBeTruthy();
  }));
});
