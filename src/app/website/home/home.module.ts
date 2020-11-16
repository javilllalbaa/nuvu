import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { LayoutComponent } from './components/layout/layout.component';
import { VideoComponent } from './components/video/video.component';
import { ProfileComponent } from './components/profile/profile.component';


@NgModule({
  declarations: [LayoutComponent, VideoComponent, ProfileComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
