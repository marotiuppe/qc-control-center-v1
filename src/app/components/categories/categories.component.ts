import { Component, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {

  displayedColumns = ['name', 'description', 'projects', 'action'];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);

  filterValue:string="";

  @ViewChild(MatPaginator) paginator! : MatPaginator;
  @ViewChild(MatSort) sort! : MatSort ;
  tableForm: FormGroup | any;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.tableForm = this.formBuilder.group({
      filterValue: ['']
    });
  }
  
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter() {
    this.filterValue = this.tableForm.get('filterValue').value.trim(); // Remove whitespace
    this.filterValue = this.filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = this.filterValue;
  }
}

export interface Element {
  name: string;
  description: string;
  projects: string;
}

const ELEMENT_DATA: Element[] = [
    {name: 'QC COntrol Center', description: 'QCC', projects: 'team managed software'},
    {name: 'QC COntrol Center', description: 'QCC', projects: 'team managed software'},
    {name: 'QC COntrol Center', description: 'QCC', projects: 'team managed software'},
    {name: 'QC COntrol Center', description: 'QCC', projects: 'team managed software'},
    {name: 'QC COntrol Center', description: 'QCC', projects: 'team managed software'},
    {name: 'QC COntrol Center', description: 'QCC', projects: 'team managed software'},
    {name: 'QC COntrol Center', description: 'QCC', projects: 'team managed software'},
    {name: 'QC COntrol Center', description: 'QCC', projects: 'team managed software'},
    {name: 'QC COntrol Center', description: 'QCC', projects: 'team managed software'}
];