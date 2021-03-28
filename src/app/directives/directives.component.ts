import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  constructor() { }

  courses = ['course1', 'course2', 'course3'];
  // courses = [];

  // runExample:any = "if";

  // runExample:any = "hidden_property_of_dom_elems";

  // runExample: any = "switch_case";
  viewMode: any = 'some content';

  // runExample: any = 'for';
  employees: any;

  // runExample: any = 'attribute_directive';
  isSelected: boolean = false;

  // runExample: any = 'safe_traversal';
  // person:any;
  person: any = { name: "Ram" };

  runExample: any = 'custom-directive';

  ngOnInit(): void {
  }

  onRemove(course: any, index: number) {
    this.courses.splice(index, 1);
  }

  loadEmpl() {
    this.employees = [
      { id: '1', name: 'ram' },
      { id: '2', name: 'hari' },
      { id: '3', name: 'radhey' }
    ];
  }

  addEmpl() {
    this.employees.push({ id: this.employees.length + 1, name: 'govind' });
  }

  trackEmpl(index: any, employee: any) {
    return employee ? employee.id : undefined;
  }

  onClick() {
    this.isSelected = !this.isSelected;
  }

}
