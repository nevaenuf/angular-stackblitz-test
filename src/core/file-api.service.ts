import { Injectable } from '@angular/core';
import { createServer } from 'miragejs';
import * as files from '../../data/files.json';

@Injectable({
  providedIn: 'root'
})
export class FileApiService {

  constructor() {}

   init() : void {
    createServer({
      routes(){
        this.namespace = 'api';
        this.get('/files', () => {
          return files;
        });
      }
  });
   }

}