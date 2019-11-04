import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor(private router: Router) {
  }

  adminOptions = [
    { name: 'Posts', icon: 'chrome_reader_mode', actionIcon: 'add_circle_outline', link: '/admin/posts' },
    { name: 'Pages', icon: 'class', link: '/admin/pages' },
    { name: 'Tags', icon: 'local_offer', link: '/admin/tags' },
    { name: 'Staff', icon: 'people', link: '/admin/staff' },
  ];

  ngOnInit() {
  }

  openCreatePost() {
    this.router.navigate(['/editor', 'post']);
  }
}
