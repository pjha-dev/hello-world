import { Injectable } from '@angular/core';


// injectable decorator tell angular to inject dependencies if applicable
//  in the current class, we were not using this wile developing
// components becuase injectable comes as part of @component decorator

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor() { }
}
