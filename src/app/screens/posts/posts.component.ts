import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../api/api.service';
import timeago from 'epoch-timeago';

export interface PostModel {
  body: string;
  title: string;
  created: string;
  isPage: boolean;
  slug: string;
}

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})

export class PostsComponent implements OnInit {

  constructor(private api: ApiService) {
    api.getPosts(false)
      .then((res: Array<PostModel>) => {
        console.log(res);
        this.setData(res);
      }).catch(err => {
      console.log(err);
    });
  }

  dataSource;

  displayedColumns: string[] = ['title', 'created', 'slug'];

  setData(res: Array<PostModel>) {
    for (let i = 0; i < res.length; i++) {
      res[i].created = timeago(Number(res[i].created) * 1000);
    }
    this.dataSource = res;
  }

  ngOnInit() {
  }

}


