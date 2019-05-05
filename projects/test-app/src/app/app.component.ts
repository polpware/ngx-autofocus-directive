import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  show: { [key: string]: boolean } = {};

  visible(key: string) {
    return !!this.show[key];
  }

  toggle(key: string) {
    this.show[key] = !this.show[key];
  }
}
