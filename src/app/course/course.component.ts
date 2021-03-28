import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  course = {
    title : 'Angular',
    rating : 4.9754,
    students : 29456,
    price: 1320,
    releaseDate : new Date()
  };


  constructor() { }

  ngOnInit(): void {
  }

}
