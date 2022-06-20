import { Component, OnInit } from '@angular/core';
import { HttpClient,} from '@angular/common/http';

@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.css']
})
export class FileuploadComponent implements OnInit {

  selectedFile!: File;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  onFileSelected(event: any){
    this.selectedFile=<File>event.target.files[0];
  }

  onUpload(){
    const filedata=new FormData();
    filedata.append('image', this.selectedFile, this.selectedFile.name);
    this.http.post('https://localhost:44323/api/Values', filedata)
    .subscribe(res=>{
      console.log(res);
    })
  }
}
