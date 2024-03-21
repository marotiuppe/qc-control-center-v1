import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../auth/authentication.service';
import { MatList } from '@angular/material/list';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent {
  createProjectForm: FormGroup | any;
  leadList :Array<Lead>=LEAD_DATA;
  categoryList :Array<Category>=CATEGORY_DATA;

  constructor(private authService: AuthenticationService, private router: Router) {
    this.createProjectForm = new FormGroup({
      id: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      key: new FormControl('', [Validators.required]),
      category: new FormControl('', [Validators.required]),
      lead: new FormControl('', [Validators.required])
    });
  }
  ngOnInit(): void {
  }
}

export interface Category {
  id: number;
  name: string;
  description: string;
}

const CATEGORY_DATA: Category[] = [
  { id: 1, name: 'IT', description: 'It Sectore' },
  { id: 1, name: 'Finace', description: 'Finance Management' },
  { id: 1, name: 'QC', description: 'Quality Control' },
  { id: 1, name: 'Medical', description: 'Medical' },
  { id: 1, name: 'Farma', description: 'Medicine and Farma' },
];

export interface Lead {
  id: number;
  name: string;
  role: string;
}

const LEAD_DATA: Lead[] = [
  { id: 1, name: 'Mohid Khan', role: 'Project Manager' },
  { id: 2, name: 'Sandeep Kumar', role: 'Team Lead' },
  { id: 3, name: 'Maroti Uppe', role: 'Software Developer' },
  { id: 4, name: 'Kapil Jadhav', role: 'React Developer' },
  { id: 5, name: 'Shubham Pawar', role: 'UI developer' },
  { id: 6, name: 'Sindhura', role: 'Team Lead' },
  { id: 7, name: 'Manoj Kumar', role: 'Testing' },
];



