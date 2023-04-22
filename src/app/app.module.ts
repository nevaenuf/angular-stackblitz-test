import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    BrowserModule,
    RouterModule.forRoot([
      {path: '', component: AppComponent},
      {path: '**', redirectTo: ''}
    ])
  ],
  declarations: [
    AppComponent,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }