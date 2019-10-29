import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import Const from '../const/Endpoints';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) {
  }

  getPosts() {
    return this.httpClient.get(Const.baseUrl + Const.posts).toPromise();
  }

  getPages() {
    return this.httpClient.get(Const.baseUrl + Const.pages).toPromise();
  }

}
