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
import { ActualitesComponent } from "./actualites/actualites.component";
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

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'admin/a-actualites', component: AActualitesComponent },
  { path: 'admin/a-bonplan', component: ABonplanComponent },
  { path: 'bon-plan', component: BonPlanComponent },
  { path: 'sante/visite', component: VisiteComponent },
  { path: 'sante/mentale', component: MentaleComponent },
  { path: 'sante/assurance', component: AssuranceComponent },
  { path: 'sante/problem', component: ProblemComponent },
  { path: 'sante', component: SanteComponent },
  { path: 'bon-plan/:id', component: BonpostComponent },
  { path: 'actualites', component: ActualitesComponent },
  { path: 'actualites/:id', component: PostComponent },
  { path: 'login', component: LoginComponent },
  { path: 'acceuil/:id', component: AcceuilComponent },
  { path: 'admin/profil/:id', component: SingleProfilComponent },
  { path: 'admin/profil', component: StudencrudComponent },
  { path: 'admin', component: HeaderComponent},
  { path: 'user', component: UserHeaderComponent},
  { path: 'user/profil', component: UserHeaderComponent},
  { path: 'user/step1/:id', component: UserStep1Component},
  { path: 'user/step2/:id', component: UserStep2Component},
  { path: 'user/step3/:id', component: UserStep3Component},
  { path: 'user/step4/:id', component: UserStep4Component},
  { path: 'user/step5/:id', component: UserStep5Component},
  { path: 'user/step6/:id', component: UserStep6Component},
  { path: 'user/step7/:id', component: UserStep7Component},
  { path: 'user/step8/:id', component: UserStep8Component}
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
