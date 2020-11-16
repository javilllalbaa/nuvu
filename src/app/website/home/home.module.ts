import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { LayoutComponent } from './components/layout/layout.component';
import { VideoComponent } from './components/video/video.component';
import { CivilizationComponent } from './components/civilization/civilization.component';


@NgModule({
  declarations: [LayoutComponent, VideoComponent, CivilizationComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
