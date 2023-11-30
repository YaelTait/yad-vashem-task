
// //file-service.service.ts
// import { Injectable } from '@angular/core';
// import { HttpClient, HttpParams } from '@angular/common/http';
// import { Observable } from 'rxjs';
// @Injectable({
//   providedIn: 'root'
// })
// export class FileService {

//   private baseUrl = 'https://localhost:44349';

//   constructor(private http: HttpClient) { }

//   getFilesAndFolders(path: string): Observable<any> {
//     const params = new HttpParams().set('folderPath', path);
//     return this.http.get(`${this.baseUrl}/api/fileexplorer`, { params });
//   }
// }
// file.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  private baseUrl = 'https://localhost:44349';

  constructor(private http: HttpClient) { }

  getFilesAndFolders(path: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/api/fileexplorer`, { params: { folderPath: path } });
  }
}
