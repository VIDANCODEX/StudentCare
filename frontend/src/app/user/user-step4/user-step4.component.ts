import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {MyService} from "../../services/my-service.service";

@Component({
  selector: 'app-user-step4',
  templateUrl: './user-step4.component.html',
  styleUrls: ['./user-step4.component.scss']
})
export class UserStep4Component implements OnInit{
  constructor(private route:ActivatedRoute,
              private service:MyService) {
  }
  userId!:number;
  ngOnInit() {
    this.userId = +this.route.snapshot.params['id'];
    this.updateStep();

  }

  updateStep(){
    const data = {
      "step": "step4",
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
