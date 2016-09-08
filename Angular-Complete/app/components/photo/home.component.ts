import {Component} from '@angular/core';
import {PhotoList} from './photo-list.component';
import {SidePanel} from './side-panel.component';

@Component({
  selector: 'home',
  directives: [PhotoList, SidePanel],
  templateUrl: 'app/components/photo/home.component.html'
})
export class HomeComponent {

}
