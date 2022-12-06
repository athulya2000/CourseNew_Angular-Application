import { Component } from '@angular/core';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent {
 
coursetitle=""
coursedescription=""
coursevenue=""
courseduration=""
coursedate=""

readValues=()=>{
  let course:any={"coursetitle":this.coursetitle,"coursedescription":this.coursedescription,"coursevenue":this.coursevenue,"courseduration":this.courseduration,"coursedate":this.coursedate}
  console.log(course)
}

}
