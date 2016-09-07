import {Component} from '@angular/core';
import {UserService} from '../../services/user.service';
import {User} from '../../models/user';
import {Photo} from '../../models/photo';
import {AddPhotoService} from '../../services/add-photo.service';
import {UploadPhotoService} from '../../services/upload-photo.service';

@Component({
  selector: 'add-photo',
  providers: [UploadPhotoService, AddPhotoService],
  templateUrl: 'app/components/photo/add-photo.component.html'
})
export class AddPhoto {

}
