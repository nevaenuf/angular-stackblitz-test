import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { CoreModule } from '../core/core.module';
import { FilesComponent } from './files/files.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';

@NgModule({
  imports: [
    BrowserModule,
    CoreModule,
    HttpClientModule,
    TableModule,
    RouterModule.forRoot([
      { path: '', component: FilesComponent },
      { path: 'files', component: FilesComponent },
      { path: 'config', component: ConfigurationComponent },
      { path: 'schedule', component: ScheduleComponent },
      { path: '**', redirectTo: '' },
    ]),
  ],
  declarations: [
    AppComponent,
    FilesComponent,
    ConfigurationComponent,
    ScheduleComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
