import {Component} from '@angular/core';
import {UserService} from '../../services/user.service';
import {User} from '../../models/user';
import {Photo} from '../../models/photo';
import {Router} from '@angular/router-deprecated';
import {ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {PhotoService} from '../../services/photo.service';


@Component({
  selector: 'my-album',
  templateUrl: 'app/components/photo/my-album.component.html',
  directives: [ROUTER_DIRECTIVES]
})
export class MyAlbum {

}
