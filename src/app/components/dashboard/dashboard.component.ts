import { Component, inject } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  private breakpointObserver = inject(BreakpointObserver);
  chiledPorops:any;
  
  displayedColumns = ['position', 'name', 'weight', 'symbol','test','test1','test2','test3','test4','test5','test6','test7','test8','test9'];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);
  tableTitle:any='Dashboard Table';

  dataPoints:any= [
    { name: "Overhead", y: 9.1 },
    { name: "Problem Solving", y: 3.7 },
    { name: "Debugging", y: 36.4 },
    { name: "Writing Code", y: 30.7 },
    { name: "Firefighting", y: 20.1 }
  ];

  data:any=JSON.stringify("this.dataPoints");

  cardLayout = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return {
          columns: 1,
          miniCard: { cols: 1, rows: 1 },
          chart: { cols: 1, rows: 2 },
          table: { cols: 1, rows: 4 },
        };
      }

      return {
        columns: 4,
        miniCard: { cols: 1, rows: 1 },
        chart: { cols: 2, rows: 2 },
        table: { cols: 4, rows: 3 },
      };
    })
  );
  
  onChildEvent(chiledPorops: any) {
    this.dataSource=chiledPorops.dataSource;
    this.displayedColumns=chiledPorops.displayedColumns;
  }
}

export interface Element {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  test:string;
  test1:string;
  test2:string;
  test3:string;
  test4:string;
  test5:string;
  test6:string;
  test7:string;
  test8:string;
  test9:string;
}

const ELEMENT_DATA: Element[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H',test:'test',test1:'test1',test2:'text2',test3:'text3',test4:'text4',test5:'text5',test6:'text6',test7:'text7',test8:'text8',test9:'text9'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He',test:'test',test1:'test1',test2:'text2',test3:'text3',test4:'text4',test5:'text5',test6:'text6',test7:'text7',test8:'text8',test9:'text9'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li',test:'test',test1:'test1',test2:'text2',test3:'text3',test4:'text4',test5:'text5',test6:'text6',test7:'text7',test8:'text8',test9:'text9'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be',test:'test',test1:'test1',test2:'text2',test3:'text3',test4:'text4',test5:'text5',test6:'text6',test7:'text7',test8:'text8',test9:'text9'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B',test:'test',test1:'test1',test2:'text2',test3:'text3',test4:'text4',test5:'text5',test6:'text6',test7:'text7',test8:'text8',test9:'text9'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C',test:'test',test1:'test1',test2:'text2',test3:'text3',test4:'text4',test5:'text5',test6:'text6',test7:'text7',test8:'text8',test9:'text9'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N',test:'test',test1:'test1',test2:'text2',test3:'text3',test4:'text4',test5:'text5',test6:'text6',test7:'text7',test8:'text8',test9:'text9'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O',test:'test',test1:'test1',test2:'text2',test3:'text3',test4:'text4',test5:'text5',test6:'text6',test7:'text7',test8:'text8',test9:'text9'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F',test:'test',test1:'test1',test2:'text2',test3:'text3',test4:'text4',test5:'text5',test6:'text6',test7:'text7',test8:'text8',test9:'text9'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne',test:'test',test1:'test1',test2:'text2',test3:'text3',test4:'text4',test5:'text5',test6:'text6',test7:'text7',test8:'text8',test9:'text9'},
  {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na',test:'test',test1:'test1',test2:'text2',test3:'text3',test4:'text4',test5:'text5',test6:'text6',test7:'text7',test8:'text8',test9:'text9'},
  {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg',test:'test',test1:'test1',test2:'text2',test3:'text3',test4:'text4',test5:'text5',test6:'text6',test7:'text7',test8:'text8',test9:'text9'},
  {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al',test:'test',test1:'test1',test2:'text2',test3:'text3',test4:'text4',test5:'text5',test6:'text6',test7:'text7',test8:'text8',test9:'text9'},
  {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si',test:'test',test1:'test1',test2:'text2',test3:'text3',test4:'text4',test5:'text5',test6:'text6',test7:'text7',test8:'text8',test9:'text9'},
  {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P',test:'test',test1:'test1',test2:'text2',test3:'text3',test4:'text4',test5:'text5',test6:'text6',test7:'text7',test8:'text8',test9:'text9'},
  {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S',test:'test',test1:'test1',test2:'text2',test3:'text3',test4:'text4',test5:'text5',test6:'text6',test7:'text7',test8:'text8',test9:'text9'},
  {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl',test:'test',test1:'test1',test2:'text2',test3:'text3',test4:'text4',test5:'text5',test6:'text6',test7:'text7',test8:'text8',test9:'text9'}
];

