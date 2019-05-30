import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {
  image: string;

  @Input() title: string;
  @Input() subtitle: string;
  @Input() textContent: string;
  @Input() imgName: string;

  constructor() { }

  ngOnInit() {
    this.image = `../../assets/${this.imgName}`;
  }

}
