import { NgModule } from '@angular/core';
import { TabMenuModule } from 'primeng/tabmenu';
import { SharedModule } from '../shared/shared.module';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  imports: [
    SharedModule, 
    TabMenuModule
  ],
  declarations: [
    HeaderComponent, 
    NavigationComponent, 
    FooterComponent
  ],
  exports: [
    HeaderComponent, 
    NavigationComponent, 
    FooterComponent
  ]
})
export class CoreModule { }