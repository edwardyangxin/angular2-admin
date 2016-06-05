import {Injectable} from '@angular/core';

import {Panel} from './panel';
import {PANEL_DATA} from './mock-panel-data';
@Injectable()
export class PanelService{
    getPanelData(){
        return Promise.resolve(PANEL_DATA);
    }
}