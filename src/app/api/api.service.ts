import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import Const from '../const/Endpoints';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) {
  }

  getPosts(isPage: boolean) {
    return this.httpClient.get(Const.baseUrl + Const.posts + '/?isPage=' + isPage).toPromise();
  }

  getPages() {
    return this.httpClient.get(Const.baseUrl + Const.pages).toPromise();
  }

  createPost(body: any) {
    return this.httpClient.post(Const.baseUrl + Const.posts, body).toPromise();
  }
}
