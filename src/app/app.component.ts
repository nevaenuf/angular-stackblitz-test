import { Component, OnInit } from '@angular/core';
import { FileApiService } from '../core/file-api.service';

@Component({
  selector: 'at-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  constructor(private apiService: FileApiService) { }

  ngOnInit() {
    console.log("calling apiService.init()");
    this.apiService.init();
  }

}