import {Component, OnInit} from '@angular/core';
import {Routes, Router, ROUTER_DIRECTIVES} from '@angular/router';

import {NavComp} from './nav.comp';
import {DashboardComp} from './dashboard/dashboard.comp';
import {TablesComp} from './tables.comp';
import {FormsComp} from './forms.comp';
import {PanelsAndWells} from './ui-elements/panels_and_wells.comp';
import {ButtonsComp} from './ui-elements/buttons.comp';
import {NotificationsComp} from './ui-elements/notifications.comp';
import {TypographyComp} from './ui-elements/typography.comp';
import {IconsComp} from './ui-elements/icons.comp';
import {GridComp} from './ui-elements/grid.comp';

@Component({
    selector: 'angular-admin',
    templateUrl: 'assets/html/app.comp.html',
    directives: [ROUTER_DIRECTIVES, NavComp]
})
@Routes([
    {path: '/dashboard', component: DashboardComp},
    {path: '/tables', component: TablesComp},
    {path: '/forms', component: FormsComp},
    {path: '/panels-wells', component: PanelsAndWells},
    {path: '/buttons', component: ButtonsComp},
    {path: '/notifications', component: NotificationsComp},
    {path: '/typography', component: TypographyComp},
    {path: '/icons', component: IconsComp},
    {path: '/grid', component: GridComp}
])
export class AppComp implements OnInit{
    constructor(private router:Router){}
    
    ngOnInit() {
        this.router.navigate(['/dashboard']);
    }
}