import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'timesystem-admin';

  colors = [null, 'primary', 'secondary', 'info', 'warning', 'light', 'dark', 'danger', 'success']

  get onlyColors() {
    return this.colors.filter(t => t);
  }

  test() {
    alert('test');
  }
}
