import { Component, OnInit, Input,/* way 1*/ 
Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
  //, inputs:['isFavorite'] // this is way 2
})
export class FavoriteComponent implements OnInit {
/*way 1*/
  // @Input() isFavorite: boolean = false;
  // way 3
  @Input('isFavorite') isFavorite: boolean = false;//giving alias is recommended
  @Output('cust_event_change') cust_event_change = new EventEmitter();//passing event
  constructor() { }

  ngOnInit(): void {
  }

  onClick($event: any) {
    this.isFavorite = !this.isFavorite;
    // this.cust_event_change.emit();//passing just event chage
    
    this.cust_event_change.emit(this.isFavorite);//passing data with event change
  }

  title: string = "";


}
