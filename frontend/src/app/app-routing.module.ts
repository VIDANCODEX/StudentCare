import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {StudencrudComponent} from "./admin/studencrud/studencrud.component";
import {SingleProfilComponent} from "./admin/single-profil/single-profil.component";
import {HeaderComponent} from "./admin/header/header.component";
import {UserHeaderComponent} from "./user/user-header/user-header.component";
import {UserStep1Component} from "./user/user-step1/user-step1.component";
import {UserStep2Component} from "./user/user-step2/user-step2.component";
import {UserStep3Component} from "./user/user-step3/user-step3.component";
import {UserStep4Component} from "./user/user-step4/user-step4.component";
import {UserStep5Component} from "./user/user-step5/user-step5.component";
import {UserStep6Component} from "./user/user-step6/user-step6.component";
import {UserStep7Component} from "./user/user-step7/user-step7.component";
import {UserStep8Component} from "./user/user-step8/user-step8.component";
import {LoginComponent} from "./login/login.component";
import { AcceuilComponent } from "./acceuil/acceuil.component";


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'acceuil/:id', component: AcceuilComponent },
  { path: 'admin/profil/:id', component: SingleProfilComponent },
  { path: 'admin/profil', component: StudencrudComponent },
  { path: 'admin', component: HeaderComponent},
  { path: 'user', component: UserHeaderComponent},
  { path: 'user/profil', component: UserHeaderComponent},
  { path: 'user/:id/step1', component: UserStep1Component},
  { path: 'user/:id/step2', component: UserStep2Component},
  { path: 'user/:id/step3', component: UserStep3Component},
  { path: 'user/:id/step4', component: UserStep4Component},
  { path: 'user/:id/step5', component: UserStep5Component},
  { path: 'user/:id/step6', component: UserStep6Component},
  { path: 'user/:id/step7', component: UserStep7Component},
  { path: 'user/:id/step8', component: UserStep8Component}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
