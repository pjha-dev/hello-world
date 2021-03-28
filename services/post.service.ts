import { DataService } from './data.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService extends DataService {

  constructor(http: HttpClient) {
    let postUrl = 'http://jsonplaceholder.typicode.com/posts';
    super(http, postUrl);
  }

  getPost(postId: number) {
    return this.get('/' + postId);
  }

  createPost(post: any) {
    return this.create(post, '');
  }

  updatePost(post: any, updatedPost: any) {
    return this.update(post, updatedPost, '/' + post.id);
  }

  deletePost(postId: number) {
    return this.delete('/' + postId);
  }

}
