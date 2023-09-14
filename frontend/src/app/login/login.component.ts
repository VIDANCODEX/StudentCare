import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MyService } from '../services/my-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {
  user = {
    id: '',
    email: '',
    password: ''
  };
  constructor(private http: HttpClient, private muyService:MyService) { }

  onSubmit() {
    this.muyService.login(this.user).subscribe(
    (response)=>{
      console.log(response);
    },
      (error)=>{
        console.log(error);
    }
  );
    /*
    this.http.post('/api/login', this.user)
      .subscribe((response: any) => {
        if (response.success) {
          console.log("logged in succed")
        } else {
          console.log("logged in failed")
        }
      });
      */
  }
}