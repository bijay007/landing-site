import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  unreadCount: number;
  constructor() {
    this.unreadCount = 2;
  }
  logo = `../../assets/logo.png`;
  readIcon = `../../assets/read-later.png`;
}
