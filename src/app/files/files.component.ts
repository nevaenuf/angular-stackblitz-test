import { Component, OnInit } from '@angular/core';
import { FileService } from './file.service';

@Component({
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.css']
})
export class FilesComponent implements OnInit {

  private fileService: FileService;

  constructor(fileService: FileService) { 
    this.fileService = fileService;
  }

  ngOnInit() {
  }

}

export interface File{
  id : number;
  
}