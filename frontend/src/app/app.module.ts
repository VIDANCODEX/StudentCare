import { NgModule } from '@angular/core';
import { DatePipe } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { StudencrudComponent } from './admin/studencrud/studencrud.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { HeaderComponent } from './admin/header/header.component';
import {RouterLinkActive, RouterOutlet} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import { SingleProfilComponent } from './admin/single-profil/single-profil.component';
import {BsDatepickerModule} from "ngx-bootstrap/datepicker";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { UserHeaderComponent } from './user/user-header/user-header.component';
import { UserProfilComponent } from './user/user-profil/user-profil.component';
import { UserStep1Component } from './user/user-step1/user-step1.component';
import { UserStep2Component } from './user/user-step2/user-step2.component';
import { UserStep3Component } from './user/user-step3/user-step3.component';
import { UserStep4Component } from './user/user-step4/user-step4.component';
import { UserStep5Component } from './user/user-step5/user-step5.component';
import { UserStep6Component } from './user/user-step6/user-step6.component';
import { UserStep7Component } from './user/user-step7/user-step7.component';
import { UserStep8Component } from './user/user-step8/user-step8.component';
import { LoginComponent } from './login/login.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ActualitesComponent } from './actualites/actualites.component';
import { PostComponent } from './post/post.component';
import { BonPlanComponent } from './bon-plan/bon-plan.component';
import { BonpostComponent } from './bonpost/bonpost.component';
import { SanteComponent } from './sante/sante.component';
import { VisiteComponent } from './sante/visite/visite.component';
import { MentaleComponent } from './sante/mentale/mentale.component';
import { AssuranceComponent } from './sante/assurance/assurance.component';
import { ProblemComponent } from './sante/problem/problem.component';
import { AActualitesComponent } from './admin/a-actualites/a-actualites.component';
import { ABonplanComponent } from './admin/a-bonplan/a-bonplan.component';


@NgModule({
  declarations: [
    AppComponent,
    StudencrudComponent,
    HeaderComponent,
    SingleProfilComponent,
    UserHeaderComponent,
    UserProfilComponent,
    UserStep1Component,
    UserStep2Component,
    UserStep3Component,
    UserStep4Component,
    UserStep5Component,
    UserStep6Component,
    UserStep7Component,
    UserStep8Component,
    NavbarComponent,
    LoginComponent,
    AcceuilComponent,
    FooterComponent,
    ActualitesComponent,
    PostComponent,
    BonPlanComponent,
    BonpostComponent,
    SanteComponent,
    VisiteComponent,
    MentaleComponent,
    AssuranceComponent,
    ProblemComponent,
    AActualitesComponent,
    ABonplanComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterOutlet,
    RouterLinkActive,
    BsDatepickerModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
