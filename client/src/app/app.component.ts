// app.component.ts
import { Component, OnInit } from '@angular/core';
import { FileService } from './file-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  foldersAndFiles: any[] = [];

  constructor(private fileService: FileService) { }

  ngOnInit(): void {
    // Provide the initial folder path (replace with your actual path)
    const initialPath = 'C:\\Users\\This_user\\Downloads\\lala';
    this.getFileData(initialPath);

  }

  getFileData(path: string): void {
    this.fileService.getFilesAndFolders(path).subscribe(
      (data) => {
        this.foldersAndFiles = data;
        console.log('Data from server:', this.foldersAndFiles);
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }
}
