import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../api/api.service';

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
        this.setData(res);
        console.log(res[0]);
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


