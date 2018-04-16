import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public _opened: boolean = false;

  _toggleSidebar(option: string): void {
    this._opened = !this._opened;
  }
}
