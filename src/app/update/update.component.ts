import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router,Params } from '@angular/router';
import { ApiService } from '../api.service';
import { datamodel } from '../list/model';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {
  public dataid!:number;
  public employee:undefined|datamodel;
constructor(private activatedroute:ActivatedRoute, private router:Router, private api:ApiService){}

  ngOnInit():void{
    this.activatedroute.paramMap.subscribe((param:Params)=>{
      this.dataid=param['get']("id");
     console.log(this.dataid);

  })
  this.api.fetchdata(this.dataid).subscribe((data:datamodel)=>{
    this.employee = data;

  })

  }

}

