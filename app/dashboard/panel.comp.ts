import {Component, OnInit} from '@angular/core';

import {Panel} from './panel';
import {PanelService} from './panel.service';
@Component({
    selector: 'panel',
    templateUrl: 'assets/html/panel.comp.html',
    providers:[PanelService]
})
export class PanelComp implements OnInit{
   panels:Array<Panel>;
   
   constructor(
       private panelService:PanelService
   ){}
   
   ngOnInit(){
       this.panelService.getPanelData().then(
           panelData => this.panels = panelData
       );
   }
}