import {Component} from '@angular/core';
import {PhotoRow} from './photo-row.component';

@Component ({
  selector: 'side-panel',
  directives: [PhotoRow],
  templateUrl: 'app/components/photo/side-panel.component.html'
})
export class SidePanel {

}
