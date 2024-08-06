import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-custom-alert',
  templateUrl: './custom-alert.component.html',
  styleUrls: ['./custom-alert.component.css']
})
export class CustomAlertComponent {
  @Input() type: string = '';
  @Input() message: string = '';
  @Input() showAlert: boolean = false;

  close() {
    this.showAlert = false;
  }
  show(type :string,message:string,showAlert:boolean) {
    this.type=type;
    this.message=message;
    this.showAlert = showAlert;
  }
  success(message:string) {
    this.type="success";
    this.message=message;
    this.showAlert = true;
  }
  danger(message:string) {
    this.type="danger";
    this.message=message;
    this.showAlert = true;
  }
  info(message:string) {
    this.type="info";
    this.message=message;
    this.showAlert = true;
  }
  warning(message:string) {
    this.type="warning";
    this.message=message;
    this.showAlert = true;
  }
}
