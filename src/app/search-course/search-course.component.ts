import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search-course',
  templateUrl: './search-course.component.html',
  styleUrls: ['./search-course.component.css']
})
export class SearchCourseComponent {

  coursetitle=""

  SearchData:any=[]

  constructor(private api:ApiService){}


  readValues=()=>{
    let course:any={
      "coursetitle":this.coursetitle
      }
      console.log(course)
      this.api.searchCourse(course).subscribe(
        (response:any)=>{
          console.log(response)
          if (response.length==0) {
            alert("Invalid course title")
          } else {
            this.SearchData=response
            
          }
        }
      )
  }

}
