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
  show() {
    this.showAlert = true;
  }
}
