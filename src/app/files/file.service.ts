import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FileTransfer } from './fileTransfer'

@Injectable({
  providedIn: 'root'
})
export class FileService {

  private url = '/api/files'
  constructor(private httpClient: HttpClient) { }

  getFiles() : Observable<FileTransfer[]> {
    return this.httpClient.get<FileTransfer[]>(this.url);
  }
}