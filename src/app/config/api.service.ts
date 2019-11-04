import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Endpoints from './Endpoints';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) {
  }

  getPosts(isPage: boolean) {
    return this.httpClient.get(Endpoints.baseUrl + Endpoints.posts + '/?isPage=' + isPage).toPromise();
  }

  getPages() {
    return this.httpClient.get(Endpoints.baseUrl + Endpoints.pages).toPromise();
  }

  createPost(body: any) {
    return this.httpClient.post(Endpoints.baseUrl + Endpoints.posts, body).toPromise();
  }
}
