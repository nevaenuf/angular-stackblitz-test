import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api/menuitem';


@Component({
  selector: 'at-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  items: MenuItem[] = [];

  constructor() { }

  ngOnInit() {
    this.items = [
      {id:'filesMenu', label: 'Files', routerLink: ['files'] },
      {id: 'configMenu', label: 'Configuration', routerLink: ['config']},
      {id: 'schedulesMenu', label: 'Schedules', routerLink: ['schedules']}
    ]
  }

}