import {Component, OnInit} from '@angular/core';
import {MyService} from "../../services/my-service.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-user-step8',
  templateUrl: './user-step8.component.html',
  styleUrls: ['./user-step8.component.scss']
})
export class UserStep8Component implements OnInit{
  userId!:number;

  constructor(private service:MyService,
              private route:ActivatedRoute) {}

  ngOnInit() {
    this.userId = +this.route.snapshot.params['id'];
    this.updateStep();
  }

  updateStep(){
    const data = {
      "step": "step8",
    };
    this.service.saveStep(this.userId,data).subscribe(
      (resultData:any)=>{
        console.log(resultData);
        console.log("Operation reussie");
      },
      (error)=>{
        console.error("Erreur lors de la sauvegarde",error);
      }
    )
  }
}
