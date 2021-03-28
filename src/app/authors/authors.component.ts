import { AuthorsService } from './../authors.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  authors: any[];
  title = '3 Authors';


  // Case 1:
  isActive = false;
  // case 2:
  // isActive = true;

  constructor(service: AuthorsService) {

    this.authors = service.getAuthors();
  }

  ngOnInit(): void {
  }

  onBtnClick($event: any) {
    $event.stopPropagation();
    console.log('button clicked');
  }

  onDivClick($event: any) {
    console.log('div clicked');
  }

  // Case 1:
  /*
  onKeyUp($event:any){
    console.log($event.key);
    if($event.key=='Enter'){
      alert('Enter is pressed and entered value is :'+$event.target.value);
    }
  }
*/

  // Case 2: Template variable binding
  /*
  onKeyUp(val:any){
    console.log(val);
  }
  */

  // Case 3: two way binding
  val: any = "some random val";
  onKeyUp() {
    console.log(this.val);
  }
}
