import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators} from '@angular/forms';
import { ApiService } from '../api.service';
import { datamodel } from './model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  employeeform!:FormGroup;
  data:undefined|datamodel[];
  constructor(private formbuilder:FormBuilder, private api:ApiService){}
  ngOnInit():void{
    this.employeeform=this.formbuilder.group({
      name:['',Validators.required],
      email:['',Validators.required],
      city:['',Validators.required],
      pincode:['',Validators.required],
      phone:['',Validators.required],
    })
    this.getemployee();
  }
  addemployee(data:datamodel){
    //console.log(data)
    this.api.addemployee(data).subscribe((rest=>{
      this.employeeform.reset();
    }
    //get employee
   
    ))
    this.getemployee();
  }
  getemployee(){
    this.api.getemployee().subscribe(res=>{
      this.data=res;
    })
  }
}
