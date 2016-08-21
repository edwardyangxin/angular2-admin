import { Component } from '@angular/core';

import {PANEL_DIRECTIVES} from '../directives/aa.directives';

@Component({
  selector: 'home',  
  // We need to tell Angular's compiler which directives are in our template.
  // Doing so will allow Angular to attach our behavior to an element
  directives: [
    PANEL_DIRECTIVES
  ],
  // Our list of styles in our component. We may add more to compose many styles together
  styleUrls: [ './home.style.css' ],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: './home.template.html'
})
export class HomeComponent {

  ngOnInit() {
  }

}
