import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {ApiService} from '../../api/api.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {

  constructor(private location: Location, private api: ApiService) {
  }

  title = '';
  body = '';

  ngOnInit() {
  }

  goBack() {
    this.location.back();
  }

  createPost() {
    const body = {
      title: this.title,
      body: this.body
    };
    console.log((body));
    this.api.createPost(body).then(res => {
      this.goBack();
    });
  }
}
