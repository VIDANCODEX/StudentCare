import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-user-profil',
  templateUrl: './user-profil.component.html',
  styleUrls: ['./user-profil.component.scss']
})
export class UserProfilComponent implements OnInit{

  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
    const idProfil= +this.route.snapshot.params['id'];
  }
}
