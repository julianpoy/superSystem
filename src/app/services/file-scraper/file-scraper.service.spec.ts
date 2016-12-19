/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FileScraperService } from './file-scraper.service';

describe('FileScraperService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FileScraperService]
    });
  });

  it('should ...', inject([FileScraperService], (service: FileScraperService) => {
    expect(service).toBeTruthy();
  }));
});
