import {Component} from '@angular/core';

@Component({
    templateUrl: 'assests/html/panel.comp.html'
})
class PanelComp {
   private messageNumber:number = 0;
   private title:string = '';
   private icon:string = 'fa-comments';
   
   constructor(
       messageNumber:number,
       title:string,
       icon?:string
   ){
       this.messageNumber = messageNumber;
       this.title = title;
       if (icon) {
           this.icon = icon;
       }
   }
}

const panleType: Array<String> = [
    'panel-primary',
    'panel-green',
    'panel-yellow',
    'panel-red'
];

export {PanelComp, panleType}