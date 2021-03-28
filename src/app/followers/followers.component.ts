import { map, switchMap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { FollowersService } from './../../../services/followers.service';
import { Component, OnInit } from '@angular/core';
import { Observable, combineLatest } from 'rxjs';

@Component({
  selector: 'followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent implements OnInit {

  constructor(private service: FollowersService, private route: ActivatedRoute) { }

  followers: any;

  ngOnInit(): void {

    // Case 1
    /*combineLatest([
      this.route.paramMap,
      this.route.queryParamMap
    ]).subscribe(combinedData => {
      console.log(combinedData[0]);
      console.log(combinedData[1]);
    });



    this.route.queryParamMap.subscribe(paramMap => {
      console.log(paramMap);
    });
    console.log('2nd way');
    console.log(this.route.snapshot.queryParamMap);

    this.service.getAll().subscribe(data => {
      this.followers = data;
    });
    */

    // case 2: clean code
    this.getAll();

  }

  getAll() {
    combineLatest([
      this.route.paramMap,
      this.route.queryParamMap
    ]).pipe(
      switchMap(combined => {
        console.log(combined[0]);
        console.log(combined[1]);

        return this.service.getAll();
      })
    ).subscribe(data => {
      this.followers = data;
    });
  }

}
