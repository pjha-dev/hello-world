import { RouterModule } from '@angular/router';
import { FollowersService } from './../../services/followers.service';
import { GlobalError } from './../../cust_errors/GlobalError';
import { PostService } from './../../services/post.service';
import { HttpClientModule } from '@angular/common/http';
import { AuthorsService } from './authors.service';
import { CoursesService } from './courses.service';
import { CourseComponent } from './course/course.component';
import { CoursesComponent } from './courses.component';
import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorsComponent } from './authors/authors.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FavoriteComponent } from './favorite/favorite.component';
import { TitleCasePipe } from './title-case.pipe';
import { LikeComponent } from './like/like.component';
import { DirectivesComponent } from './directives/directives.component';
import { InputFormatDirective } from './input-format.directive';
import { ZippyComponent } from './zippy/zippy.component';
import { InputFormsComponent } from './input-forms/input-forms.component';
import { CourseFormComponent } from './course-form/course-form.component';
import { ChangePasswordFormComponent } from './change-password-form/change-password-form.component';
import { PostsComponent } from './posts/posts.component';
import { FollowersComponent } from './followers/followers.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ArchiveComponent } from './archive/archive.component';
import { ArchiveDetailsComponent } from './archive-details/archive-details.component';
import { IndexComponentComponent } from './index-component/index-component.component';


@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    AuthorsComponent,
    FavoriteComponent,
    TitleCasePipe,
    LikeComponent,
    DirectivesComponent,
    InputFormatDirective,
    ZippyComponent,
    InputFormsComponent,
    CourseFormComponent,
    ChangePasswordFormComponent, PostsComponent, FollowersComponent, NavbarComponent, GithubProfileComponent, HomeComponent, NotFoundComponent, ArchiveComponent, ArchiveDetailsComponent, IndexComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: 'followers/:userId/:userName', component: GithubProfileComponent },
      { path: 'followers', component: FollowersComponent },
      { path: 'posts', component: PostsComponent },
      { path: 'archive/:year/:month', component: ArchiveDetailsComponent },
      { path: 'archives', component: ArchiveComponent },
      { path: '', component: IndexComponentComponent },
      { path: '**', component: NotFoundComponent }
    ])
  ],
  providers: [
    CoursesService,
    AuthorsService,
    PostService,
    { provide: ErrorHandler, useClass: GlobalError },
    FollowersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
