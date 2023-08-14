import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MyService {
  private isChecked: boolean = false;
  constructor(private http:HttpClient) { }

  getOneStudent(id: number): Observable<any> {
    return this.http.get("http://localhost:8085/api/student" + "/" + id);
  }

  getAllStudent(): Observable<any> {
    return this.http.get("http://localhost:8085/api/student/");
  }

  updateStudent(id: number, data: any): Observable<any> {
    return this.http.put(`http://localhost:8085/api/student/update/${id}`, data);
  }

  downloadFile(id: number): Observable<any> {
    return this.http.get("http://localhost:8085/api/downloadFile" + "/" + id);
  }

  updateComment(id: number, data: any): Observable<any> {
    return this.http.put(`http://localhost:8085/api/user/update/${id}`, data);
  }

  uploadDateRappel(id:number,data: any) {
    return this.http.put(`http://localhost:8085/api/Rappel/${id}`, data);
  }

  setIsChecked(value: boolean) {
    this.isChecked = value;
  }

  getIsChecked(): boolean {
    return this.isChecked;
  }

}
