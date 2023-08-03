import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-user-step4',
  templateUrl: './user-step4.component.html',
  styleUrls: ['./user-step4.component.scss']
})
export class UserStep4Component implements OnInit{
  constructor(private route:ActivatedRoute) {
  }
  ngOnInit() {

  }
  userId = +this.route.snapshot.params['id'];

}
