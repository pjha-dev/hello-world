import { AppError } from './../../../cust_errors/AppError';
import { NotFoundError } from './../../../cust_errors/NotFoundError';
import { PostService } from './../../../services/post.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IPost } from './post';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: any;

  constructor(private service: PostService) {
  }


  ngOnInit(): void {
    /*
        this.service.getPost(4)
          .then(
            (data) => {
              let a = JSON.parse(JSON.stringify(data));
              console.log(a.id)
            },
            err => {
              console.log(err);
            });
    */

    this.service.getAll()

      .subscribe(
        data => {
          console.log(data);
          this.posts = data;
        },
        (error: AppError) => {
          if (error instanceof NotFoundError)
            console.log("URL not found");
          else
            console.log("Incorrect URL");
        });


  }



  getPosts() {
    // Case1:
    // this.posts = this.http.get<IPost[]>(this.url);
    // case2:
    // this.http.get(this.url).toPromise().then((data) => {

    //   this.posts = data;
    // });
  }

  newPost: any;

  createPost(title: HTMLInputElement) {

    let post = { 'title': title.value };

    this.service.createPost(post).toPromise().then(
      data => {
        this.posts.splice(0, 0, data);
      },
      err => {
        console.log(err);
      });

    title.value = '';

  }

  updatePost(post: any) {

    let updatedPost = { title: 'updated title' };

    this.service.updatePost(post, updatedPost).toPromise().then(
      data => {
        let index = (this.posts as Array<any>).indexOf(post);
        (this.posts as Array<any>).splice(index, 1, data);

      },
      err => {
        console.log(err);
      });
  }

  deletePost(post: any) {
    this.service.deletePost(345).toPromise().then(
      data => {
        let index = (this.posts as Array<any>).indexOf(post);
        (this.posts as Array<any>).splice(index, 1);
        console.log(data);
      },
      err => {
        console.log(err);
      });
  }

}