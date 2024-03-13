import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, ViewChild, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { map } from 'rxjs';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent {
  displayedColumns = ['name', 'key', 'type', 'lead'];
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
  key: string;
  type: string;
  lead: string;
}

const ELEMENT_DATA: Element[] = [
    {name: 'QC COntrol Center', key: 'QCC', type: 'team managed software', lead: 'maroti'},
    {name: 'QC COntrol Center', key: 'QCC', type: 'team managed software', lead: 'maroti'},
    {name: 'QC COntrol Center', key: 'QCC', type: 'team managed software', lead: 'maroti'},
    {name: 'QC COntrol Center', key: 'QCC', type: 'team managed software', lead: 'maroti'},
    {name: 'QC COntrol Center', key: 'QCC', type: 'team managed software', lead: 'maroti'},
    {name: 'QC COntrol Center', key: 'QCC', type: 'team managed software', lead: 'maroti'},
    {name: 'QC COntrol Center', key: 'QCC', type: 'team managed software', lead: 'maroti'},
    {name: 'QC COntrol Center', key: 'QCC', type: 'team managed software', lead: 'maroti'},
    {name: 'QC COntrol Center', key: 'QCC', type: 'team managed software', lead: 'maroti'}
];


