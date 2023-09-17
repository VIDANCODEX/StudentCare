import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-actualites',
  templateUrl: './actualites.component.html',
  styleUrls: ['./actualites.component.scss']
})
export class ActualitesComponent implements OnInit {
  actualites: any[] = [];

  constructor(private http: HttpClient, private datePipe: DatePipe, private router: Router) {}

  ngOnInit(): void {
    this.http.get<any[]>('http://localhost:8085/api/actualites').subscribe(
      (data) => {
        this.actualites = data.map(actualite => ({
          ...actualite,
          date_publication : this.formatDate(actualite.date_publication)
        }));
      },
      (error) => {
        console.error('Erreur lors de la récupération des actualités :', error);
      }
    );
  }

  // Function to format the date
  private formatDate(date: any): any {
    return this.datePipe.transform(date, 'dd/MM/yyyy HH:mm');
  }

  redirectToPost(postId: any): any {
    // Navigate to the detailed post page with the post's ID
    this.router.navigate([`/actualites/${postId}`]);
  }
}