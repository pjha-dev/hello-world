import { CoursesService } from './courses.service';
import { Component } from "@angular/core";

@Component({
    selector : 'courses',
    // template : '<h2>{{title}}</h2>'
    template: `
        <h2>{{title}}</h2>
        <div>
            <!--string interpolation
            <img src={{imageUrl}} />-->

            <!--
            property binding
                [src]  here is not HTML attribute but DOM property
            -->
            <img [src]="imageUrl" />
            
        </div>
        <ul *ngFor="let course of courses">
            <!--<li>{{course.name}}-{{course.age}}</li>-->
            {{course}}
        </ul>


        <table>
            <tr>
                <!--colspan is a know attribute for html but
                not for DOM property, in such cases we will write 
                it like case 2 -->

                <!--Case 1:-->
                <!--<td [colspan]="colspan"></td>-->


                <!--Case 2:-->
                <td [attr.colspan]="colspan"></td>
            </tr>
        <table>

    `
})
export class CoursesComponent{
    courses:any[];
    title = 'List of Courses';
    imageUrl = 'https://i.pinimg.com/originals/69/21/1b/69211b329928dfbb77e07adea163e9b7.jpg';
    colspan = 2;

    // Case 1
    /*
    constructor(){
        let service = new CoursesService();
        this.courses = service.getCourses();
    }
    */
    
    // Case 2
    constructor(service:CoursesService){
        this.courses = service.getCourses();
    }
    
}