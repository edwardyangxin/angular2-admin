import {Component, OnInit} from '@angular/core';
import {Routes, Router, ROUTER_DIRECTIVES} from '@angular/router';

import {NavComp} from './nav.comp';
import {DashboardComp} from './dashboard.comp';
import {TablesComp} from './tables.comp';
import {FormsComp} from './forms.comp';

@Component({
    selector: 'angular-admin',
    templateUrl: 'assets/html/app.comp.html',
    directives: [ROUTER_DIRECTIVES, NavComp]
})
@Routes([
    {path: '/dashboard', component: DashboardComp},
    {path: '/tables', component: TablesComp},
    {path: '/forms', component: FormsComp}
])
export class AppComp implements OnInit{
    constructor(private router:Router){}
    
    ngOnInit() {
        this.router.navigate(['/dashboard']);
    }
}