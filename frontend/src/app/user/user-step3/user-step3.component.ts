import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {MyService} from "../../services/my-service.service";

@Component({
  selector: 'app-user-step3',
  templateUrl: './user-step3.component.html',
  styleUrls: ['./user-step3.component.scss']
})
export class UserStep3Component implements OnInit{
  selectedOption!: string;
  Commentaire!: string;
  userId!:number;

  constructor(private route:ActivatedRoute,
              private router:Router,
              private http:HttpClient,
              private service: MyService) {}
  ngOnInit() {
    this.userId = +this.route.snapshot.params['id'];
    this.updateStep()
  }



  onOptionSelected(option: string) {
    this.selectedOption = option;
  }

  onNext() {
    if (this.selectedOption === 'accept') {
      this.router.navigateByUrl('/user/step4/' + this.userId);
    } else if (this.selectedOption === 'refuse') {
      this.updateStudentComment();
      this.router.navigateByUrl('/user/step1/' + this.userId);
    }
  }


  updateStudentComment() {
    const userId = +this.route.snapshot.params['id'];
    const updatedData = {
      "Commentaire": this.Commentaire
    };
    this.service.updateComment(userId, updatedData).subscribe(
      (response: any) => {
        console.log(response);
        alert("Commentaire de l'étudiant mis à jour");
      },
      (error) => {
        console.error("Error while updating comment:", error);
      }
    );
  }
  updateStep(){
    const data = {
      "step": "step3",
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
