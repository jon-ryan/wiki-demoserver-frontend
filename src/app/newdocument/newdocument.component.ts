import { Component, OnInit } from '@angular/core';
import { DocumentgatewayService } from '../documentgateway.service';

@Component({
  selector: 'app-newdocument',
  templateUrl: './newdocument.component.html',
  styleUrls: ['./newdocument.component.scss']
})
export class NewdocumentComponent implements OnInit {

  newDocTitle: string = "";
  newDocDesc: string = "";

  error: boolean = false;
  errorText: string = "";

  constructor(private _documentgateway: DocumentgatewayService) { }

  ngOnInit(): void {
    document.documentElement.scrollTop = 0;
  }

  addNewDoc(){
    if (this.newDocTitle == "" || this.newDocDesc == "") {
      this.errorText = "Please provide Title and Description";
      this.error = true;
      return;
    }

    var doc = this._documentgateway.setDocument({"title": this.newDocTitle, "description": this.newDocDesc})

    if (doc["Title"] != this.newDocTitle || doc["Description"] != this.newDocDesc) {
      this.errorText = "Something went wrong while updating the database";
      this.error = true;
      return;
    }

    this.error = false;
    
    this.newDocTitle = "";
    this.newDocDesc = ""; 
  }

}
