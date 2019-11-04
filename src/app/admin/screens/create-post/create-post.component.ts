import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ApiService } from '../../../config/api.service';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {

  constructor(private location: Location, private api: ApiService, private route: ActivatedRoute) {
  }

  title = '';
  body = '';
  isPage: boolean;
  titlePlaceholder: string;
  bodyPlaceholder: string;

  ngOnInit() {
    this.isPage = this.route.snapshot.paramMap.get('type') === 'page';
    console.log(this.isPage + '');
    if (this.isPage) {
      this.titlePlaceholder = 'Page Title';
      this.bodyPlaceholder = 'Begin writing your page...';
    } else {
      this.titlePlaceholder = 'Post Title';
      this.bodyPlaceholder = 'Begin writing your post...';
    }
  }

  goBack() {
    this.location.back();
  }

  createPost() {
    const body = {
      title: this.title,
      body: this.body,
      isPage: this.isPage,
    };
    this.api.createPost(body).then(res => {
      this.goBack();
    });
  }
}
