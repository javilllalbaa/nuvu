import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { LayoutComponent } from './components/layout/layout.component';
import { VideoComponent } from './components/video/video.component';
import { ProfileComponent } from './components/profile/profile.component';
import { GoalsComponent } from './components/goals/goals.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';


@NgModule({
  declarations: [LayoutComponent, VideoComponent, ProfileComponent, GoalsComponent, PortfolioComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
