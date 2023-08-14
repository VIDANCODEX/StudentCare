import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {MyService} from "../../services/my-service.service";

@Component({
  selector: 'app-user-step2',
  templateUrl: './user-step2.component.html',
  styleUrls: ['./user-step2.component.scss']
})
export class UserStep2Component implements OnInit{
  userId!:number;
  isChecked: boolean = false;
  constructor(private route:ActivatedRoute,
              private service:MyService) {}
  ngOnInit() {
    this.userId = +this.route.snapshot.params['id'];
    this.isChecked = this.service.getIsChecked();

  }



}
