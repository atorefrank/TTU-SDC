import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {LoginService} from '../../services/login.service';

@Component({
  selector: 'nav-bar',
  directives: [ROUTER_DIRECTIVES],
  templateUrl: 'app/components/Navigation/nav-bar.component.html'
})
export class NavBar {

}
