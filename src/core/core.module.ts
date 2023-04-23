import { NgModule } from '@angular/core';
import { TabMenuModule } from 'primeng/tabmenu';
import { SharedModule } from '../shared/shared.module';
import { FileApiService } from './file-api.service';
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
    FooterComponent,
    FileApiService
  ],
  exports: [
    HeaderComponent, 
    NavigationComponent, 
    FooterComponent,
    FileApiService,
  ]
})
export class CoreModule { }