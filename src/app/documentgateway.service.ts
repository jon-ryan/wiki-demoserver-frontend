import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DocumentgatewayService {

  private documents: Array<Object> = [];

  private url: string = "http://localhost:8080";

  constructor(private _httpClient: HttpClient) { }

  public async getDocuments() {
    var docs = await this._httpClient.get("${this.url}/api/getalldocs");
    return docs["Documents"];
  }

  public async setDocument(newDoc: Object) {
    var doc = await this._httpClient.post("${this.url}/api/addnewdoc", newDoc, { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) })
    return doc;
  }
}
