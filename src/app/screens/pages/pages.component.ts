import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../api/api.service';
import {PostModel} from '../posts/posts.component';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {

  constructor(private api: ApiService) {
    api.getPosts(true)
      .then((res: Array<PostModel>) => {
        this.setData(res);
        // console.log(res[0]);
      }).catch(err => {
      console.log(err);
    });
  }

  dataSource;

  displayedColumns: string[] = ['title', 'created', 'slug'];

  setData(res: Array<PostModel>) {
    this.dataSource = res;
  }

  ngOnInit() {
  }

}
