import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {MyService} from "../../services/my-service.service";

@Component({
  selector: 'app-user-step6',
  templateUrl: './user-step6.component.html',
  styleUrls: ['./user-step6.component.scss']
})
export class UserStep6Component implements OnInit {
  constructor(private route: ActivatedRoute,
              private http: HttpClient,
              private service: MyService) {
  }

  ngOnInit() {
    this.userId = +this.route.snapshot.params['id'];
    this.getOneStudent(this.userId);
    this.updateStep();
  }


  Student: any[] = [];
  Statut: string = "";
  userId !:number;


  getOneStudent(userId:number){
    this.service.getOneStudent(userId).subscribe(
      (resultData: any) =>{
        this.Student = resultData.data;
        this.Statut = this.Student[0].Statut;
      }
    );
  }

  updateStep(){
    const data = {
      "step": "step6",
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
