import { Component, OnInit } from '@angular/core';
import { DocumentgatewayService } from '../documentgateway.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public documents: Array<Object> = []

  constructor(private _documentgateway: DocumentgatewayService) { }

  ngOnInit(): void {
    this.init();
  }

  private async init(){
    document.documentElement.scrollTop = 0;
    this.documents = await this._documentgateway.getDocuments();
  }

}
