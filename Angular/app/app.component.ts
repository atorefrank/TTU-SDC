
import {SideBar} from './components/Navigation/side-bar.component';
import {Component} from '@angular/core';
import {HomeComponent} from './components/photo/home.component';
import {NavBar} from './components/Navigation/nav-bar.component';
import {RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {ROUTER_PROVIDERS} from '@angular/router-deprecated';
import {Register} from './components/UserInfo/register.component';
import {HTTP_PROVIDERS} from '@angular/http';
import {RegisterService} from './services/register.service';
import {Login} from './components/UserInfo/login.component';
import {LoginService} from './services/login.service';
import {UserService} from './services/user.service';
import {PhotoService} from './services/photo.service';
import {MyAlbum} from './components/photo/my-album.component';
import {AddPhotoService} from './services/add-photo.service';
import {UploadPhotoService} from './services/upload-photo.service';
import {AddPhoto} from './components/photo/add-photo.component';
import {ImageDetail} from './components/photo/image-detail.component';

@Component({
    selector: 'my-app',
    directives: [HomeComponent, NavBar, SideBar, ROUTER_DIRECTIVES,Login, MyAlbum, AddPhoto],
    providers: [ROUTER_PROVIDERS, HTTP_PROVIDERS, RegisterService, LoginService, UserService, PhotoService],
    template: `
    <side-bar></side-bar>
    <nav-bar></nav-bar>
    <router-outlet></router-outlet>
    `
})
@RouteConfig([

])
export class AppComponent { }
