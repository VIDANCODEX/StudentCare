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
    this.updateStep();
  }

  updateIsChecked(value: boolean) {
    this.isChecked = value;
    this.service.setIsChecked(value);
  }

  updateStep(){
    const data = {
      "step": "step1",
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
