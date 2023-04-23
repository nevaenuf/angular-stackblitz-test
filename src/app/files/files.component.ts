import { Component, OnInit } from '@angular/core';
import { FileService } from './file.service';
import { FileTransfer } from './fileTransfer';

@Component({
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.css'],
})
export class FilesComponent implements OnInit {
  private fileService: FileService;
  filesList: FileTransfer[] = [];

  constructor(fileService: FileService) {
    this.fileService = fileService;
  }

  ngOnInit() {
    this.fileService.getFiles().subscribe({
      next: (files) => {
        this.filesList = files;

      },
    });
  }
}
