import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminGuard } from  './admin/admin.guard';
import { HomeComponent } from "./home/home.component";
import { ProjectComponent } from "./project/project.component";
import { WelcomeComponent } from "./welcome/welcome.component";

const routes: Routes = [
  {
      path: 'admin',
      component: ProjectComponent,
      children: [
          {
              path: 'home',
              component: HomeComponent,
              canActivate: [AdminGuard]
          },
          { 
              path: 'login', 
              component: LoginComponent 
          }
      ]
  },{
      path: '',
      component: WelcomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
