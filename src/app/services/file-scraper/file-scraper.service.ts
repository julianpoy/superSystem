import { Injectable } from '@angular/core';
declare var fs: any;

@Injectable()
export class FileScraperService {
	protected files;

  constructor() { 
		
		var romDir = "./roms";
		
		this.files = [];
		
		fs.readdir(romDir, (err, roms) => {
		  if(roms) roms.forEach(file => {
		    console.log(file);
				this.files.push(file);
		  });
		});
	
	}
	
	getFiles(){
		return this.files;
	}

}
