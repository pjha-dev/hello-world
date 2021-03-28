import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'like',
  // templateUrl: './like.component.html',
  // styleUrls: ['./like.component.css']
  template: `
      <h1>Like component</h1>
      <div>
        <i class="bi" [class.bi-heart]="!isLiked" 
        [class.bi-heart-fill]="isLiked"  (click)="likeClicked()">
        </i>
        {{label}}
      </div>
  `,
  styles: [`
    .bi-heart:{
      color:#ccc;
      cursor:pointer;
    }
    .bi-heart-fill{
      color:deeppink;
      cursor:pointer;
    }
  `]
})
export class LikeComponent implements OnInit {

  isLiked: boolean = false;
  label: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  likeClicked() {
    if (this.isLiked) {
      this.label = 0;
    } else {
      this.label = 1;
    }
    this.isLiked = !this.isLiked;
  }

}