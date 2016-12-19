import { Component, OnInit } from '@angular/core';

import { EmulatorsService } from "../../services/emulators/emulators.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
	providers: [EmulatorsService]
})
export class HomeComponent implements OnInit {

  constructor(private emulatorsService:EmulatorsService) { }

  ngOnInit() {
  }

}
