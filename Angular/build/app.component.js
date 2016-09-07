System.register(['./components/Navigation/side-bar.component', '@angular/core', './components/photo/home.component', './components/Navigation/nav-bar.component', '@angular/router-deprecated', '@angular/http', './services/register.service', './components/UserInfo/login.component', './services/login.service', './services/user.service', './services/photo.service', './components/photo/my-album.component', './components/photo/add-photo.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var side_bar_component_1, core_1, home_component_1, nav_bar_component_1, router_deprecated_1, router_deprecated_2, http_1, register_service_1, login_component_1, login_service_1, user_service_1, photo_service_1, my_album_component_1, add_photo_component_1;
    var AppComponent;
    return {
        setters:[
            function (side_bar_component_1_1) {
                side_bar_component_1 = side_bar_component_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (nav_bar_component_1_1) {
                nav_bar_component_1 = nav_bar_component_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
                router_deprecated_2 = router_deprecated_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (register_service_1_1) {
                register_service_1 = register_service_1_1;
            },
            function (login_component_1_1) {
                login_component_1 = login_component_1_1;
            },
            function (login_service_1_1) {
                login_service_1 = login_service_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            },
            function (photo_service_1_1) {
                photo_service_1 = photo_service_1_1;
            },
            function (my_album_component_1_1) {
                my_album_component_1 = my_album_component_1_1;
            },
            function (add_photo_component_1_1) {
                add_photo_component_1 = add_photo_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        directives: [home_component_1.HomeComponent, nav_bar_component_1.NavBar, side_bar_component_1.SideBar, router_deprecated_1.ROUTER_DIRECTIVES, login_component_1.Login, my_album_component_1.MyAlbum, add_photo_component_1.AddPhoto],
                        providers: [router_deprecated_2.ROUTER_PROVIDERS, http_1.HTTP_PROVIDERS, register_service_1.RegisterService, login_service_1.LoginService, user_service_1.UserService, photo_service_1.PhotoService],
                        template: "\n    <side-bar></side-bar>\n    <nav-bar></nav-bar>\n    <router-outlet></router-outlet>\n    "
                    }),
                    router_deprecated_1.RouteConfig([]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map