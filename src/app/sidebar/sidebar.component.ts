import { Component, Input, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

import {Menu} from './menu.entity';

declare let jQuery: any;

@Component({
    selector: 'aaSidebar',
    templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements AfterViewInit {
    @ViewChild('metisMenu') el: ElementRef;
    
    @Input() menuArray:Array<Menu>;
    
    ngAfterViewInit() {
        jQuery(this.el.nativeElement).metisMenu();
    }
}