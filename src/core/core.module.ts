import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [HeaderComponent, NavigationComponent],
  exports: [HeaderComponent, NavigationComponent]
})
export class CoreModule { }