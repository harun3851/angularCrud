import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators} from '@angular/forms';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  employeeform!:FormGroup;
  constructor(private formbuilder:FormBuilder){}
  ngOnInit():void{
    this.employeeform=this.formbuilder.group({
      name:['',Validators.required],
      email:['',Validators.required],
      city:['',Validators.required],
      pincode:['',Validators.required],
      phone:['',Validators.required],
    })
    
  }
  addemployee(data:any){
    console.log(data)
  }
}
