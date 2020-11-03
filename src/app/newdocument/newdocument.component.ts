import { Component, OnInit } from '@angular/core';
import { DocumentgatewayService } from '../documentgateway.service';

@Component({
  selector: 'app-newdocument',
  templateUrl: './newdocument.component.html',
  styleUrls: ['./newdocument.component.scss']
})
export class NewdocumentComponent implements OnInit {

  newDocTitle: string = "";
  newDocAbstract: string = "";
  newDocBody: string = "";

  error: boolean = false;
  errorText: string = "";

  constructor(private _documentgateway: DocumentgatewayService) { }

  ngOnInit(): void {
    document.documentElement.scrollTop = 0;
  }

  async addNewDoc(){
    if (this.newDocTitle == "" || this.newDocBody == "" || this.newDocAbstract == "") {
      this.errorText = "Please provide Title and Description";
      this.error = true;
      return;
    }

    var doc = await this._documentgateway.setDocument({"Title": this.newDocTitle, "Abstract": this.newDocAbstract, "Body": this.newDocBody})

    if (doc["Title"] != this.newDocTitle || doc["Abstract"] != this.newDocAbstract || doc["Body"] != this.newDocBody) {
      this.errorText = "Something went wrong while updating the database";
      this.error = true;
      return;
    }

    this.error = false;
    
    this.newDocTitle = "";
    this.newDocAbstract = "";
    this.newDocBody = ""; 
  }

}
