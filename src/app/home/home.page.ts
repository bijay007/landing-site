import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  unreadCount: number;
  constructor() {
    this.unreadCount = 0;
  }
  logo = `../../assets/logo.png`;
  readIcon = `../../assets/read-later.png`;

  displayFormCount(count) {
    this.unreadCount = count;
  }
}
