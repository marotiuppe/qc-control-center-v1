import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './components/auth/auth.guard';
import { LoginComponent } from './components/auth/login/login.component';
import { SignUpComponent } from './components/auth/sign-up/sign-up.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ContactComponent } from './components/contact/contact.component';
import { TeamComponent } from './components/team/team.component';
import { UserComponent } from './components/user/user.component';
import { RoleComponent } from './components/role/role.component';
import { ProjectComponent } from './components/project/project.component';
import { TicketComponent } from './components/ticket/ticket.component';
import { IssueComponent } from './components/issue/issue.component';
import { CreateProjectComponent } from './components/project/create-project/create-project.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CreateCategoriesComponent } from './components/categories/create-categories/create-categories.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  // { path: '**', redirectTo: 'login' },
  { path: 'login', component: LoginComponent },
  { path: "signup", component: SignUpComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: "contact", component: ContactComponent },
  { path: "team", component: TeamComponent },
  { path: 'user', component: UserComponent },
  { path: 'role', component: RoleComponent },
  { path: 'project', component: ProjectComponent },
  { path: 'createProject', component: CreateProjectComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'createCategories', component: CreateCategoriesComponent },
  { path: "ticket", component: TicketComponent },
  { path: 'issue', component: IssueComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
