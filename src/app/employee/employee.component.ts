import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employeeForm: FormGroup | undefined;

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.employeeForm = this.fb.group({
      name: '',
      lastname:'',
      birthdate:'',

    })
    // this.employeeForm.valueChanges.subscribe(console.log)
  }
  submit(){
    console.log(this.employeeForm?.value)
    window.localStorage.setItem("employee-list",JSON.stringify(this.employeeForm?.value));
  }
  
  
}
