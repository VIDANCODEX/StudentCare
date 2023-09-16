import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MyService } from '../services/my-service.service';
import { Router } from '@angular/router';

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
      (response) => {
        console.log(response);
        if (response.success && response.userId) {
          const userId = response.userId;
          this.router.navigate([`/acceuil/${userId}`]);
        } else {
          console.log('Login failed or user ID not provided.');
        }
      },
      (error) => {
        console.log(error);
        this.router.navigate(['/login']);
      }
    );
  }
}
