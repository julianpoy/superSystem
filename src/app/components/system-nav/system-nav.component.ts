import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'system-nav',
  templateUrl: './system-nav.component.html',
  styleUrls: ['./system-nav.component.scss']
})
export class SystemNavComponent implements OnInit {

    //Mock Data for now
    public mockData = {
        "SNES": {
            "name": "Super Nintendo Entertainment System",
            "roms": [
                {
                    "filePath": '~/roms/kirby.gba'
                }
            ]
        },
        "GBC": {
            "name": "Gameboy Color",
            "roms": [
                {
                    "filePath:": '~/roms/megaman.gbc'
                }
            ]
        }
    }

  constructor() {

  }

  ngOnInit() {
  }

}
