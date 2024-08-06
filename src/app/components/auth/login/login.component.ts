import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { CustomAlertComponent } from '../../common-component/custom-alert/custom-alert.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [CustomAlertComponent]
})
export class LoginComponent {
  @Output() childEvent = new EventEmitter<boolean>();
  loginForm: FormGroup | any;
  title = 'material-login';
  username: any;
  password: any;
  showSpinner: any;
  isLoggedIn:boolean=false;

  constructor(private authService: AuthenticationService, private router: Router,private customAlert:CustomAlertComponent) {
    this.loginForm = new FormGroup({
      email: new FormControl('maroti@gmail.com', [Validators.required, Validators.email,Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,63}$', ),]),
      password: new FormControl('Corpus@123', [Validators.required,Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$')])
    });
  }

  login(){
    if(!this.loginForm.valid){
      this.isLoggedIn=false;
      return;
    }
    let username=this.loginForm.get('email')?.value;
    let password=this.loginForm.get('password')?.value;
    localStorage.setItem('user',this.loginForm.value);
    this.authService.login(username, password).subscribe( async (response) => {
      this.isLoggedIn=true;
      this.childEvent.emit(this.isLoggedIn);
      this.customAlert.success("Logged in Success!");
      this.router.navigate(['/dashboard']);
    });
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
