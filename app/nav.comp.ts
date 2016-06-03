import {Component, OnInit} from '@angular/core';

declare var jQuery:JQueryStatic;

@Component({
    selector: 'nav-comp',
    templateUrl: 'assets/html/nav.comp.html'
    
})
export class NavComp implements OnInit {
    ngOnInit(){
        jQuery('#side-menu').metisMenu();
    }
}