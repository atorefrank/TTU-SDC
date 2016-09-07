import {Component, Input} from '@angular/core';
import {Photo} from '../../models/photo';
import {PhotoService} from '../../services/photo.service';
import {UserService} from '../../services/user.service';
import {User} from '../../models/user';
import {RouteParams} from '@angular/router-deprecated';
import {ImageComments} from './../comments/image-comments.component';

@Component({
  selector: 'image-detail',
  templateUrl: 'app/components/photo/image-detail.component.html',
  directives: [ImageComments]
})
export class ImageDetail{

}
