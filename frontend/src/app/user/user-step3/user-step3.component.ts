import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-user-step3',
  templateUrl: './user-step3.component.html',
  styleUrls: ['./user-step3.component.scss']
})
export class UserStep3Component implements OnInit{
  selectedOption!: string;
  Commentaire!: string;

  constructor(private route:ActivatedRoute,
              private router:Router,
              private http:HttpClient) {}
  ngOnInit() {
  }

  userId = +this.route.snapshot.params['id'];

  onOptionSelected(option: string) {
    this.selectedOption = option;
  }

  onNext() {
    if (this.selectedOption === 'accept') {
      this.router.navigateByUrl('/user/step4/' + this.userId);
    } else if (this.selectedOption === 'refuse') {
      this.UpdateComment();
      this.router.navigateByUrl('/user/step1/' + this.userId);
    }
  }

  UpdateComment() {
    const path = this.route.snapshot.params['id'];
    let bodyData = {
      "Commentaire":this.Commentaire,
    };
    console.log(bodyData);

    this.http.put("http://localhost:8085/api/user/update" + "/" + path, bodyData).subscribe((resultData: any) => {
      console.log(resultData);
      alert("Student Commentaire Updateddd");
    });

  }

}

