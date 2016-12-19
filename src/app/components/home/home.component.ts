import { Component, OnInit } from '@angular/core';

//Import components
import { SystemNavComponent } from '../system-nav/system-nav.component';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
