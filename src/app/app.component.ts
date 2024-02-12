import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pipe';
  currentDate: Date = new  Date();
  x:string = 'jyoti mishra';
  y:string = 'prachi msr';
  a=0.567;

  b:{[s:string ]:number}={
    b:1,c:2,d:3
  };

  students:any={
    ID:'stu1',
    Name:"JYOTI MISHRA",
    DOB:23,
    Gender:"female",
    Fees:2000
  }

}