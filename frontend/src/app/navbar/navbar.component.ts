import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor(private router: Router) { }

  goToProfile() {
    // Retrieve the user ID from local storage
    const userId = localStorage.getItem('userId');
    const userStep = localStorage.getItem('userStep');

    if (userId) {
      // Navigate to the profile route with the user ID as a parameter
      this.router.navigate(['/user/',  userStep, userId]);
    } else {
      // Handle the case where user ID is not found in local storage
      console.log('User ID not found in local storage');
    }
  }
}
