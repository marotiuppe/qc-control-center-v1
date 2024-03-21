import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material-module';
import { NgIf, NgFor } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/auth/login/login.component';
import { SignUpComponent } from './components/auth/sign-up/sign-up.component';
import { TicketComponent } from './components/ticket/ticket.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorInterceptor } from './components/auth/error.interceptor';
import { CardComponent } from './components/common-component/card/card.component';
import { TableComponent } from './components/common-component/table/table.component';
import { UserComponent } from './components/user/user.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProjectComponent } from './components/project/project.component';
import { TeamComponent } from './components/team/team.component';
import { IssueComponent } from './components/issue/issue.component';
import { RoleComponent } from './components/role/role.component';
import { CreateProjectComponent } from './components/project/create-project/create-project.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CreateCategoriesComponent } from './components/categories/create-categories/create-categories.component';
import { CustomAlertComponent } from './components/common-component/custom-alert/custom-alert.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    SignUpComponent,
    TicketComponent,
    CardComponent,
    TableComponent,
    UserComponent,
    ContactComponent,
    ProjectComponent,
    TeamComponent,
    IssueComponent,
    RoleComponent,
    CreateProjectComponent,
    CategoriesComponent,
    CreateCategoriesComponent,
    CustomAlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    NgIf,
    NgFor,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
