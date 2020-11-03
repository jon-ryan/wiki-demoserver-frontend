import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DocumentgatewayService {

  constructor(private _httpClient: HttpClient) { }

  public async getDocuments() {
    var docs = await this._httpClient.get("/api/getalldocs").toPromise();
    return docs["Documents"];
  }

  public async setDocument(newDoc: Object) {
    var doc = await this._httpClient.post("/api/addnewdoc", newDoc, { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }).toPromise();
    console.log(doc);
    return doc;
  }
}
