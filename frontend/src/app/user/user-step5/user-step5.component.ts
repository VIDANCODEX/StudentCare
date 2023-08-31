import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import {MyService} from "../../services/my-service.service";

@Component({
  selector: 'app-user-step5',
  templateUrl: './user-step5.component.html',
  styleUrls: ['./user-step5.component.scss']
})
export class UserStep5Component implements OnInit {
  constructor(private route: ActivatedRoute,
              private http: HttpClient,
              private router: Router,
              private service: MyService) {
  }
  userFile!: File;
  userFileName!: string;
  dateRappel!: string;
  userId!:number;
  ngOnInit() {
    this.userId = +this.route.snapshot.params['id'];
    this.updateStep();
  }


  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.userFile = file;
      this.userFileName = this.userId.toString()+'.'+this.getFileExtension(file.name);
    }
  }

  onDateSelected(event:any){
    const selectedDate =event.target.value;
    this.dateRappel=new Date(selectedDate).toISOString().split('T')[0];
  }

  getFileExtension(filename: string): string {
    return filename.split('.').pop() || '';
  }

  convertFileToBase64(file: File) {
    const reader = new FileReader();
    reader.onload = (event: any) => {
      const base64String = event.target.result.split(',')[1];
      console.log(base64String);

      this.uploadFile(base64String).subscribe(
        (response) => {
          console.log(response);
          this.uploadDateRappel();
        },
        (error) => {
          console.error(error);
        }
      );
    };
    reader.readAsDataURL(file);
  }

  uploadFile(fileData: string) {
    return this.http.post<any>("http://localhost:8085/api/uploadFile", {
      fileData: fileData,
      fileName: this.userFileName
    });
  }


  uploadDateRappel(){
    const id = this.route.snapshot.params['id'];
    let updatedData = {
      "dateRappel":this.dateRappel,
    };
    this.service.uploadDateRappel(id,updatedData).subscribe(
      (resultData: any) =>{
        console.log("Date mis à jour");
      },
      (error) =>{
        console.error("Erreur de mis à jour de la date")
      }
    )
  }

  onNext() {
    this.convertFileToBase64(this.userFile);
    this.router.navigateByUrl('/user/step6/' + this.userId);
  }

  updateStep(){
    const data = {
      "step": "step5",
    };
    this.service.saveStep(this.userId,data).subscribe(
      (resultData:any)=>{
        console.log(resultData);
        console.log("Operation reussie");
      },
      (error)=>{
        console.error("Erreur lors de la sauvegarde",error);
      }
    )
  }


}
