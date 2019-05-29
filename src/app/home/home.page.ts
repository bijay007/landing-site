import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}
  unreadCount = 2;
  imgRoot = '../../assets';
  logo = `${this.imgRoot}/logo.png`;
  readIcon = `${this.imgRoot}/read-later.png`;
}
