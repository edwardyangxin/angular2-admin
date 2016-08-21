import { Component, Input } from '@angular/core';

@Component({
    selector: 'aaPanel',
    templateUrl: './panel.component.html'
})
export class PanelComponent {
    @Input() public title:string;
    @Input() public desc:string;
    @Input() public url:string = '#';
    @Input() public color:string ='panel-primary';
}