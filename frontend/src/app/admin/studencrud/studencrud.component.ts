import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";


@Component({
  selector: 'app-studencrud',
  templateUrl: './studencrud.component.html',
  styleUrls: ['./studencrud.component.scss']
})
export class StudencrudComponent implements OnInit{
  StudentArray : any[]=[];
  isResultLoaded =false;


  //currentStudentID="";
  id: string="";
  Nationalite: string="";
  Arrivee: string="";
  Statut: string="";
  Delai: string="";
  filterForm: FormGroup;
  filteredStudentArray!: any[];
  currentPage: number = 1;
  itemsPerPage: number = 20;
  totalPages: number = 0;



  constructor(private http: HttpClient,
              private router: Router,
              private formBuilder: FormBuilder )
  {
    this.getAllStudent();

    this.filterForm = this.formBuilder.group({
      code: '',
      nationalite: '',
      statut: ''
    });


  }
  ngOnInit(): void {
    this.getAllStudent();


  }
  getAllStudent()
  {
    this.http.get("http://localhost:8085/api/student/")
      .subscribe((resultData: any)=>
      {
        this.isResultLoaded = true;
        console.log(resultData.data);
        this.StudentArray = resultData.data;
        this.filteredStudentArray =resultData.data;
        this.totalPages = Math.ceil(this.filteredStudentArray.length / this.itemsPerPage)
      });
  }




  /*onViewProfilDetail(studentID: string) {
    this.currentStudentID = studentID;
    this.router.navigateByUrl('/admin/profil/' + this.currentStudentID);
  }*/

  applyFilters() {
    const filters = this.filterForm.value;
    this.StudentArray = this.filteredStudentArray.filter((student) => {
      return (
        (!filters.code || student.id === filters.code) &&
        (!filters.nationalite || student.Nationalite.includes(filters.nationalite)) &&
        (!filters.statut || student.Statut === filters.statut)
      );
    });
  }

  paginate() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.StudentArray = this.filteredStudentArray.slice(startIndex, endIndex);
  }
  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.paginate();
      console.log(this.totalPages);
    }
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.paginate();
    }
  }

}


