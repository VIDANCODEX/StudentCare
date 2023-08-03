import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-user-step2',
  templateUrl: './user-step2.component.html',
  styleUrls: ['./user-step2.component.scss']
})
export class UserStep2Component implements OnInit{
  constructor(private route:ActivatedRoute) {}
  ngOnInit() {
  }
  userId = +this.route.snapshot.params['id'];


}
