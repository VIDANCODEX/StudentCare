import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-user-step6',
  templateUrl: './user-step6.component.html',
  styleUrls: ['./user-step6.component.scss']
})
export class UserStep6Component implements OnInit {
  constructor(private route: ActivatedRoute,
              private http: HttpClient) {
  }


  ngOnInit() {
    const userId = +this.route.snapshot.params['id'];
    this.getOneStudent(userId);
  }


  Student: any[] = [];
  Statut: string = "";
  userId = +this.route.snapshot.params['id'];

  getOneStudent(test: number) {
    this.http.get("http://localhost:8085/api/student/" + test) // Use the 'test' parameter in the URL
      .subscribe((resultData: any) => {
        this.Student = resultData.data;
        if (this.Student.length > 0) {
          this.Statut = this.Student[0].Statut; // Fix the closing parentheses
        }
      });
  }
}
