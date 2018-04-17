import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { Sidebar } from 'ng-sidebar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  @ViewChild(Sidebar) sidebar: Sidebar;
  public opened: boolean = false;
  public mode: any = 'push';

  ngAfterViewInit() {

  }

  _toggleSidebar(option: any): void {
    this.mode = option;
  }

  _openSidebar() {
    this.opened = this.sidebar.opened === undefined ? false : !this.sidebar.opened;
  }
}
