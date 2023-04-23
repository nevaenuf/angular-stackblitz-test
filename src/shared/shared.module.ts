import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule, FormsModule
  ],
  declarations: [],
  exports: [
    CommonModule, FormsModule, BrowserAnimationsModule
  ]
})
export class SharedModule { }