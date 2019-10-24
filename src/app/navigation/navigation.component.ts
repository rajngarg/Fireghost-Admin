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
    {name: 'Posts', icon: 'chrome_reader_mode', actionIcon: 'add_circle_outline'},
    {name: 'Pages', icon: 'class'},
    {name: 'Tags', icon: 'local_offer'},
    {name: 'Staff', icon: 'people'},
  ];

  ngOnInit() {
  }

}
