/*
 * Angular 2 decorators and services
 */
import { Component, ViewChild, ElementRef, OnInit, ViewEncapsulation } from '@angular/core';
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
export class AppComponent implements OnInit {
  private title:string = 'Angular2 admin';
  private menus:any[] = [
    {name: 'Dashboard', icon: 'fa-dashboard', route: 'dashboard'},
    {name: 'Charts', icon: 'fa-bar-chart-o', link: '#', children: [
      {name: 'Flot Charts', link: '#'},
      {name: 'Morris.js Charts', link: '#'},
    ]},
    {name: 'Tables', icon: 'fa-table', route: 'tables'},
    {name: 'Forms', icon: 'fa-edit', route: 'forms'},
    {name: 'UI Elements', icon: 'fa-wrench', link: '#', children: [
      {name: 'Panels and Wells', route: 'panels-and-wells'},
      {name: 'Buttons', route: 'buttons'},
      {name: 'Notifications', route: 'notifications'},
      {name: 'Typography', route: 'typography'},
      {name: 'Icons', route: 'icons'},
      {name: 'Grid', route: 'grid'}
    ]},
    {name: 'Multi-Level Dropdown', icon: 'fa-sitemap', link: '#', children: [
      {name: 'Second Level Item', link: '#'},
      {name: 'Second Level Item', link: '#'},
      {name: 'Third Level', link: '#', children: [
        {name: 'Third Level Item', link: '#'},
        {name: 'Third Level Item', link: '#'},
        {name: 'Third Level Item', link: '#'}
      ]},
    ]}

  ];

  constructor(
    public appState: AppState) {
  }

  ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }

}