import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MyService } from '../services/my-service.service';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {
  actualite = {
    id_actu:'',
    titre:'',
    description_c:'',
    description_l:'',
    image_url:'',
    date_publication:''
  }


  
  constructor(private http: HttpClient, private muyService:MyService, private route:ActivatedRoute ,private router: Router, private datePipe: DatePipe) {}

  ngOnInit() {
    const postId = this.route.snapshot.paramMap.get('id'); // Get the post ID from the URL
    
    this.http.get<any>(`http://localhost:8085/api/actualites/${postId}`).subscribe(
      (data) => {
        this.actualite = {
          id_actu: data.id_actu,
          titre: data.titre,
          description_c: data.description_c,
          description_l: data.description_l,
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