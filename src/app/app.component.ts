import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular app';

  post: any = {
    isFavorite: true
  };

  // onFavoriteChanged(){
  //   console.log("favorite changed and app componenet received it");
  // }


  //receiving data from custom event
  onFavoriteChanged($event: boolean) {
    console.log($event,"favorite changed and app componenet received it");
  }

}
