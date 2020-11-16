import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { WebsiteRoutingModule } from './website-routing.module';
import { LayoutComponent } from './components/layout/layout.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';



@NgModule({
  declarations: [
    LayoutComponent, 
    FooterComponent, 
    HeaderComponent],
  imports: [
    CommonModule,
    WebsiteRoutingModule,
    ReactiveFormsModule
  ]
})
export class WebsiteModule { }
