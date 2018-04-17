import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { Sidebar } from 'ng-sidebar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  @ViewChild(Sidebar) sidebar: Sidebar;

  public _opened: boolean = false;

  ngAfterViewInit() {
    this.sidebar.sidebarClass = 'sidebar';
    console.log(this.sidebar);
  }

  _toggleSidebar(option: string): void {
    this._opened = !this._opened;
  }
}
