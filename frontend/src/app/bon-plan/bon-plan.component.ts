import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-bon-plan',
  templateUrl: './bon-plan.component.html',
  styleUrls: ['./bon-plan.component.scss']
})
export class BonPlanComponent implements OnInit {
  bonplans: any[] = [];
  constructor(private http: HttpClient, private datePipe: DatePipe, private router: Router) {}

  ngOnInit(): void {
    this.http.get<any[]>('http://localhost:8085/api/bonplan').subscribe(
      (data) => {
        this.bonplans = data.map(bonplan => ({
          ...bonplan,
          date_publication : this.formatDate(bonplan.date_publication)
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
    this.router.navigate([`/bon-plan/${postId}`]);
  }
}