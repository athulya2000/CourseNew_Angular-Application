import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-allcourse',
  templateUrl: './view-allcourse.component.html',
  styleUrls: ['./view-allcourse.component.css']
})
export class ViewAllcourseComponent {

  constructor(private api:ApiService){
    api.fetchCourse().subscribe(
      (response)=>{
        this.course=response
      }
    )
  }
  course:any=[]
}
