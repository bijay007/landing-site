import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { HomeBannerComponent } from './components/home-banner/home-banner.component';
import { HomeContentComponent } from './components/home-content/home-content.component';
import { ArticleComponent } from '../shared/components/article/article.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [HomePage, HomeBannerComponent, HomeContentComponent, ArticleComponent]
})
export class HomePageModule {}
