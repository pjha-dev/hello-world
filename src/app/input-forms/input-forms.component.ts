import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'input-forms',
  templateUrl: './input-forms.component.html',
  styleUrls: ['./input-forms.component.css']
})
export class InputFormsComponent {

  onChange(x: any) {
    console.log(x);
    console.log(x.name)
    console.log(x.value)
    console.log(x.errors)
  }

  submit(fm:any){
    console.log(fm.valid);
  }
}
