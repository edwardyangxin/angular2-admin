import {Component, OnInit} from '@angular/core';
import {Routes, Router, ROUTER_DIRECTIVES} from '@angular/router';

import {NavComp} from './nav.comp';
@Component({
    selector: 'angular-admin',
    templateUrl: 'assets/html/app.comp.html',
    styleUrls: [],
    directives: [ROUTER_DIRECTIVES, NavComp]
})
export class AppComp {
    
}