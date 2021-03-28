import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-archive-details',
  templateUrl: './archive-details.component.html',
  styleUrls: ['./archive-details.component.css']
})
export class ArchiveDetailsComponent implements OnInit {

  header: any;

  constructor(private route: ActivatedRoute, private r: Router) { }

  ngOnInit(): void {
    const pm = this.route.snapshot.paramMap;
    this.header = pm.get('year') + '/' + pm.get('month');
  }

  viewAll() {
    this.r.navigate(['/archives']);
    console.log(this.r);
    console.log(this.route);
  }

}
