import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import {MyService} from "../../services/my-service.service";

@Component({
  selector: 'app-user-step7',
  templateUrl: './user-step7.component.html',
  styleUrls: ['./user-step7.component.scss']
})
export class UserStep7Component implements OnInit {
  constructor(private route: ActivatedRoute,
              private http: HttpClient,
              private service:MyService) {}
  Student: any[] = [];
  dateRappel: string = "";
  displayDate: string = "";
  userId !:number;

  ngOnInit() {
    this.userId = +this.route.snapshot.params['id'];
    this.getOneStudent(this.userId);
    this.updateStep();
  }

  getOneStudent(test: number) {
    this.http.get("http://localhost:8085/api/student/" + test)
      .subscribe((resultData: any) => {
        this.Student = resultData.data;
        if (this.Student.length > 0) {
          this.dateRappel = new Date(this.Student[0].dateRappel).toISOString().split('T')[0];
          this.calculateDisplayDate();
        }
      });
  }

  calculateDisplayDate() {
    const dateRappelObj = new Date(this.dateRappel);
    const targetDateObj = new Date(dateRappelObj.getTime() + 90 * 24 * 60 * 60 * 1000);
    const currentDateObj = new Date();

    const timeDiff = targetDateObj.getTime() - currentDateObj.getTime();
    const remainingDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

    if (remainingDays > 0) {
      this.displayDate = remainingDays.toString();
    } else {
      this.displayDate = '0';
    }
  }

  updateStep(){
    const data = {
      "step": "step7",
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
