import { Component } from '@angular/core';
// import EventEmitter = require('events');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ColorfulViz';
  activeDom = 1;
  
  addActive(index:any){
    this.activeDom = index;
  }
}