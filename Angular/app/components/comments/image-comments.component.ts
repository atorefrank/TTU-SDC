import {Component, Input} from '@angular/core';
import {Photo} from '../../models/photo';
import {PhotoService} from '../../services/photo.service';
import {UserService} from '../../services/user.service';
import {User} from '../../models/user';
import {Comment} from '../../models/comment';
import {CommentService} from '../../services/comment.service';

@Component({
  selector: 'image-comments',
  providers: [CommentService],
  templateUrl: 'app/components/comments/image-comments.component.html'
})
export class ImageComments {

}
