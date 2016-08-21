import {Component, ViewChild, ElementRef, OnInit} from '@angular/core';

declare let jQuery:any;
@Component({
    styles: ['./tables.style.scss'],
    templateUrl: './tables.component.html'
})
export class TablesComponent implements OnInit {
    @ViewChild('dataTablesExample') el: ElementRef;
    
    ngOnInit() {
        jQuery(this.el.nativeElement).DataTable();
    }
}