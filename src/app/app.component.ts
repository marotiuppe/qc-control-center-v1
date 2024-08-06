import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy, Renderer2 } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NavItem } from './nav-item.component';
import { CustomAlertComponent } from './components/common-component/custom-alert/custom-alert.component';
declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  // showLogoutAlert = false;
  themeColor = '';
  isLoggedIn: boolean = true;
  options = this.formBuilder.group({
    bottom: 0,
    fixed: false,
    top: 0,
  });
  message: string = "";
  show:boolean=false;
  type:string="";

  displayUser: string = "Maroti";
  mobileQuery: MediaQueryList;

  navItems: NavItem[] = [
    { id: 1, name: 'Dashboard', path: '/dashboard' },
    { id: 2, name: 'Project', path: '/project' },
    { id: 3, name: 'Categories', path: '/categories' },
    { id: 4, name: 'Team', path: '/team' },
    { id: 5, name: 'Role', path: '/role' },
    { id: 6, name: 'User', path: '/user' },
    { id: 7, name: 'Ticket', path: '/ticket' },
    { id: 8, name: 'Issue', path: '/issue' },
    { id: 9, name: 'Contact', path: '/contact' }
  ];

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private formBuilder: FormBuilder) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  logout() {
    this.message = "Logout Success";
    this.show=true;
    this.type="success";
    this.isLoggedIn=false;
  }

  onChildEvent(data: boolean) {
    this.isLoggedIn = data;
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
