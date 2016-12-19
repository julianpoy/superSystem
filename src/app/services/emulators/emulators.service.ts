import { Injectable } from '@angular/core';
import { FileScraperService } from '../file-scraper/file-scraper.service';

@Injectable()
export class EmulatorsService {
	files;
	
  constructor(private fileScraperService:FileScraperService) { 
		this.files = this.fileScraperService.getFiles();
		
	}
	
	getEmulators(){
		return this.files;
	}

}
