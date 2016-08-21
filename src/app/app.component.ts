/*
 * Angular 2 decorators and services
 */
import { Component, ViewChild, ElementRef, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import {CORE_DIRECTIVES} from '@angular/common';
import { DROPDOWN_DIRECTIVES } from 'ng2-bootstrap/ng2-bootstrap';

import { AppState } from './app.service';
import { SidebarComponent } from './sidebar/sidebar.component';
import { Menu } from './sidebar/menu.entity';

@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.style.scss',
    '../assets/css/sb-admin-2.css'
  ],
  templateUrl: './app.component.html',
  directives: [CORE_DIRECTIVES, DROPDOWN_DIRECTIVES, SidebarComponent]
})
export class AppComponent implements OnInit, AfterViewInit {
  private title:string = 'Angular2 admin';
  
  constructor(
    public appState: AppState) {
  }

  ngOnInit() {
    
    console.log('Initial App State', this.appState.state);
  }

  ngAfterViewInit() {
        
    }

}