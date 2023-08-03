import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-user-step1',
  templateUrl: './user-step1.component.html',
  styleUrls: ['./user-step1.component.scss']
})
export class UserStep1Component implements OnInit{

 constructor(private route:ActivatedRoute) {
 }
  ngOnInit() {
    const idProfil= +this.route.snapshot.params['id'];
  }
  userId = +this.route.snapshot.params['id'];
}
