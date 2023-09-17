import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  actualite: { titre: string, description: string, image_url: string, date_publication: string } = {
    titre: '',
    description: '',
    image_url: '',
    date_publication: ''
  };
  titre:any;
  route: any;


  
  constructor(private http: HttpClient, private datePipe: DatePipe, private router: Router) {}

  ngOnInit(): any {
    const postId = this.route.snapshot.paramMap.get('id'); // Get the post ID from the URL
    
    this.http.get<any>(`http://localhost:8085/api/actualites/${postId}`).subscribe(
      (data) => {
        this.actualite = {
          titre: data.titre,
          description: data.description,
          image_url: data.image_url,
          date_publication: this.formatDate(data.date_publication),
        };
      },
      (error) => {
        console.error('Erreur lors de la récupération de la publication :', error);
      }
    );
  }

  private formatDate(date: any): any {
    return this.datePipe.transform(date, 'dd/MM/yyyy HH:mm');
  }
}