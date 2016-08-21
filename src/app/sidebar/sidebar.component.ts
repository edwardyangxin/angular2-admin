import { Component, Input, ViewChild, ElementRef, OnInit } from '@angular/core';

import {Menu} from './menu.entity';

declare let jQuery: any;
@Component({
    selector: 'aaSidebar',
    templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
    @ViewChild('metisMenu') el: ElementRef;
    
    ngOnInit() {
        jQuery(this.el.nativeElement).metisMenu();
    }
}