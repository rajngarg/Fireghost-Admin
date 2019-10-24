import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss']
})
export class DrawerComponent implements OnInit {

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
