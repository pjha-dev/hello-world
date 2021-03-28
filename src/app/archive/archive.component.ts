import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {


  archives: any = [
    { year: 2017, month: 1 },
    { year: 2017, month: 3 },
    { year: 2017, month: 2 }
  ];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    
  }

}
