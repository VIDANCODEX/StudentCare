import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-single-profil',
  templateUrl: './single-profil.component.html',
  styleUrls: ['./single-profil.component.scss']
})
export class SingleProfilComponent implements OnInit{

  StudentArray : any[]=[];
  isResultLoaded =false;
  isEditingArrivee: boolean = false;
  isEditingDelai: boolean = false;
  originalArrivee: string = '';
  originalDelai: string = '';
  selectedStatut: string = '';





  id: string="";
  Nationalite: string="";
  Arrivee: string="";
  Statut: string="";
  Delai: string="";
  isEditingStatut: boolean=false;
  originalStatut: string="";


  constructor(private http: HttpClient,  private route: ActivatedRoute, private formBuilder: FormBuilder) {}
  ngOnInit(): void {

    const idProfil= +this.route.snapshot.params['id'];
    this.getOneStudent(idProfil);

  }

  getOneStudent(test:number)
  {
    this.http.get("http://localhost:8085/api/student"+ "/"+ test)
      .subscribe((resultData: any)=>
      {
        this.isResultLoaded = true;
        console.log(resultData.data);
        this.StudentArray = resultData.data;
        if (this.StudentArray.length > 0) {
          this.Arrivee = new Date(this.StudentArray[0].Arrivee).toISOString().split('T')[0];
          this.Delai = new Date(this.StudentArray[0].Delai).toISOString().split('T')[0];}
          this.Statut =this.StudentArray[0].Statut
          this.id =this.StudentArray[0].id}
  );

  }


  UpdateRecords() {
    const path = this.route.snapshot.params['id'];
    let bodyData = {
      "Arrivee": new Date(this.Arrivee).toISOString(),
      "Delai": new Date(this.Delai).toISOString(),
      "Statut":this.Statut,
    };
    console.log(bodyData);

    this.http.put("http://localhost:8085/api/student/update" + "/" + path, bodyData).subscribe((resultData: any) => {
      console.log(resultData);
      alert("Student Registered Updateddd");
    });

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

    this.UpdateRecords();


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

  downloadFile(id: number) {
    const apiUrl = `http://localhost:8085/api/downloadFile/${id}`;
    this.http.get(apiUrl, { responseType: 'blob' }).subscribe((blob: Blob) => {
      const downloadUrl = URL.createObjectURL(blob);

      // Create a hidden <a> element and trigger a click event to start the download
      const anchor = document.createElement('a');
      anchor.href = downloadUrl;
      anchor.download = 'carte_provisoire.pdf'; // Set the desired file name
      anchor.click();

      // Clean up the object URL after the download has started
      URL.revokeObjectURL(downloadUrl);
    });
  }


}

