import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent {
 
  coursetitle=""
  coursedescription=""
  coursevenu=""
  duration=""
  date=""
 
constructor(private api:ApiService){}

readValues=()=>{
  let course:any={"coursetitle":this.coursetitle,"coursedescription":this.coursedescription,"coursevenu":this.coursevenu,"duration":this.duration,"date":this.date}
  console.log(course)
  this.api.addCourse(course).subscribe(
    (response:any)=>{
      console.log(response)
      if (response.status="success") {
        alert("course added successfully")
        this.coursetitle=""
        this.coursedescription=""
        this.coursevenu=""
        this.duration=""
        this.date=""
      } else {
        alert("something went wrong")
      }
    }
  )
}

}
