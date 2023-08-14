import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder} from "@angular/forms";
import {MyService} from "../../services/my-service.service";

@Component({
  selector: 'app-single-profil',
  templateUrl: './single-profil.component.html',
  styleUrls: ['./single-profil.component.scss']
})
export class SingleProfilComponent implements OnInit{

  StudentArray : any[]=[];
  isEditingArrivee: boolean = false;
  isEditingDelai: boolean = false;
  originalArrivee: string = '';
  originalDelai: string = '';
  selectedStatut: string = '';





  id: number=+this.route.snapshot.params['id'];
  Nationalite: string="";
  Arrivee: string="";
  Statut: string="";
  Delai: string="";
  isEditingStatut: boolean=false;
  originalStatut: string="";


  constructor(private http: HttpClient,
              private route: ActivatedRoute,
              private formBuilder: FormBuilder,
              private service: MyService,
              private router:Router) {}
  ngOnInit(): void {

    const idProfil= +this.route.snapshot.params['id'];
    this.getOneStudent(idProfil);

  }



  getOneStudent(userId:number){
    this.service.getOneStudent(userId).subscribe(
      (resultData: any)=>{
        this.StudentArray = resultData.data;
        this.Arrivee = new Date(this.StudentArray[0].Arrivee).toISOString().split('T')[0];
        this.Delai = new Date(this.StudentArray[0].Delai).toISOString().split('T')[0];
        this.Statut = this.StudentArray[0].Statut;
        this.id = this.StudentArray[0].id
      }
    );
  }



  updateStudent(userId: number) {
    const updatedData = {
      "Arrivee": new Date(this.Arrivee).toISOString(),
      "Delai": new Date(this.Delai).toISOString(),
      "Statut": this.Statut,
    };

    this.service.updateStudent(userId, updatedData).subscribe(
      (resultData: any) => {
        console.log(resultData);
        console.log("Student Updateddd");
        location.reload();
      },
      (error) => {
        console.error("Error while updating student:", error);
      }
    );
  }

  downloadFile() {
    const userId = +this.route.snapshot.params['id'];
    this.service.downloadFile(userId).subscribe(
      (response: any) => {
        const base64Data = response.base64Data;
        const fileExtension = response.fileExtension;
        const anchor = document.createElement('a');
        anchor.href = `data:application/octet-stream;base64,${base64Data}`;
        anchor.download = `carte_provisoire.${fileExtension}`;
        anchor.click();
      },
      (error) => {
        console.error("Error while downloading file:", error);
      }
    );
  }

  toggleDateEditing(field: string) {
    if (field === 'Arrivee') {
      this.isEditingArrivee = !this.isEditingArrivee;
      // Sauvegarder la valeur d'origine du champ si on entre en mode édition
      if (this.isEditingArrivee) {
        this.saveOriginalValues();
      } else {
        this.Arrivee = this.originalArrivee;
      }
    } else if (field === 'Delai') {
      this.isEditingDelai = !this.isEditingDelai;
      // Sauvegarder la valeur d'origine du champ si on entre en mode édition
      if (this.isEditingDelai) {
        this.saveOriginalValues();
      } else {
        this.Delai = this.originalDelai;
      }
    }
  }



  saveChanges() {
    if (this.isEditingArrivee && this.Arrivee !== this.originalArrivee) {
      this.Arrivee = new Date(this.Arrivee).toISOString();
    }

    if (this.isEditingDelai && this.Delai !== this.originalDelai) {
      this.Delai = new Date(this.Delai).toISOString();
    }

    if (this.isEditingStatut && this.selectedStatut !== this.originalStatut) {
      this.Statut = this.selectedStatut;
    }

    this.updateStudent(this.id);


    this.isEditingArrivee = false;
    this.isEditingDelai = false;
    this.isEditingStatut = false;
  }

  saveOriginalValues() {
    this.originalArrivee = this.Arrivee;
    this.originalDelai = this.Delai;
    this.originalStatut = this.Statut;
  }

  toggleStatutEditing() {
    this.isEditingStatut = !this.isEditingStatut;
    if (this.isEditingStatut) {
      this.selectedStatut = this.originalStatut; // Définir la valeur sélectionnée initiale
    }
  }





}

