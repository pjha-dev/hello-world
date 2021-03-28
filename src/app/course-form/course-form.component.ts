import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent {

  categories: any = ['Development', 'Testing', 'Integrations', 'SQL']

  formObject: any

  onChange(courseName: any) {
    console.log(courseName)
  }

  onSelectChange(val: any) {
    console.log(val)
  }

  onSubmit(frm: any) {
    console.log(frm.value)
    this.formObject = frm.value
  }
}
