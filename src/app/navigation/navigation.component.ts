import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor() {
  }

  adminOptions = [
    {name: 'Posts', icon: 'chrome_reader_mode', actionIcon: 'add_circle_outline', link: '/posts'},
    {name: 'Pages', icon: 'class', link: '/pages'},
    {name: 'Tags', icon: 'local_offer', link: '/tags'},
    {name: 'Staff', icon: 'people', link: '/staff'},
  ];

  ngOnInit() {
  }

}
