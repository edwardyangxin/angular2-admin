import {Component, OnInit} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';

declare var jQuery:JQueryStatic;

@Component({
    selector: 'nav-comp',
    templateUrl: 'assets/html/nav.comp.html',
    directives: [ROUTER_DIRECTIVES]
    
})
export class NavComp implements OnInit {
    ngOnInit(){
        jQuery('#side-menu').metisMenu();
    }
}