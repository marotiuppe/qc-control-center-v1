import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../auth/authentication.service';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent {
  createProjectForm: FormGroup | any;

  constructor(private authService: AuthenticationService, private router: Router) {
    this.createProjectForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      key: new FormControl('', [Validators.required]),
      type: new FormControl('', [Validators.required]),
      lead: new FormControl('', [Validators.required])
    });
  }
  ngOnInit(): void {
  }
}
