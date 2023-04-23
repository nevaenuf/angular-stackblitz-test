import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  private url = '/api/files'
  constructor(private httpClient: HttpClient) { }

  getFiles() : Observable<File[]> {
    return this.httpClient.get<File[]>(this.url);
  }
}