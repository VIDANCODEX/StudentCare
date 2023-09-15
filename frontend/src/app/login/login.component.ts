import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MyService } from '../services/my-service.service';
import { Router } from '@angular/router';
//import { Route } from '@angular/router';

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

  constructor(private http: HttpClient, private muyService:MyService, private router: Router) { }

  onSubmit() {
    this.muyService.login(this.user).subscribe(
    (response)=>{
      console.log(response);
      this.router.navigate([`/user`]);

    },
      (error)=>{
        console.log(error);
        this.router.navigate([`/login`]);
    }
  );
    
  /*
  this.http.post('/api/login', this.user)
      .subscribe((response: any) => {
        if (response.success) {
          console.log("logged in succed");
          this.router.navigate([`/user`]);
        } else {
          console.log("logged in failed");
          this.router.navigate([`/login`]);
        }
      });
  }
  */
  }
}
