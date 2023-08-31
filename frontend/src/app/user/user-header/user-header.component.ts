import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {MyService} from "../../services/my-service.service";

@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.scss']
})
export class UserHeaderComponent implements OnInit{
  constructor(private router: Router,
              private service:MyService) {}
  StudentArray : any[]=[];
  id !: number;
  ngOnInit() {
    this.getAllStudent();
  }

  getAllStudent(){
    this.service.getAllStudent().subscribe(
      (resultData: any) =>{
        this.StudentArray = resultData.data;
       }
    );
  }
}
