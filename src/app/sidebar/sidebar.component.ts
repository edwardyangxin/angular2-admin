import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';

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