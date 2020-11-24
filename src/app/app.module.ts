import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { reducers } from './redux/index';
import { EffectsModule } from '@ngrx/effects';
// import { CivilizationEffects } from './redux/civilizations/civilization.effect';
import { NuvuEffects } from './redux/nuvu/nuvu.effect';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([NuvuEffects])
  ],
  providers: [
    { provide: 'API_URL', useValue: environment.api },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
