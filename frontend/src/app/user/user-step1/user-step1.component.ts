import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { MyService } from "../../services/my-service.service";

@Component({
  selector: 'app-user-step1',
  templateUrl: './user-step1.component.html',
  styleUrls: ['./user-step1.component.scss']
})
export class UserStep1Component implements OnInit {
  isChecked: boolean = false;
  userId!: number;
  constructor(private route: ActivatedRoute, private service: MyService) {}

  ngOnInit() {
    this.userId = +this.route.snapshot.params['id'];
  }

  updateIsChecked(value: boolean) {
    this.isChecked = value;
    this.service.setIsChecked(value);
  }


}
