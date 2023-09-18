import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MyService } from '../services/my-service.service';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bonpost',
  templateUrl: './bonpost.component.html',
  styleUrls: ['./bonpost.component.scss']
})
export class BonpostComponent {
  bonplan = {
    id_bon:'',
    titre:'',
    categorie:'',
    description_c:'',
    description_l:'',
    evaluation:'',
    image_url:'',
    date_publication:''
  }


  
  constructor(private http: HttpClient, private muyService:MyService, private route:ActivatedRoute ,private router: Router, private datePipe: DatePipe) {}

  ngOnInit() {
    const postId = this.route.snapshot.paramMap.get('id'); // Get the post ID from the URL
    
    this.http.get<any>(`http://localhost:8085/api/bonplan/${postId}`).subscribe(
      (data) => {
        this.bonplan = {
          id_bon: data.id_actu,
          titre: data.titre,
          categorie: data.categorie,
          description_c: data.description_c,
          description_l: data.description_l,
          evaluation: data.evaluation,
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