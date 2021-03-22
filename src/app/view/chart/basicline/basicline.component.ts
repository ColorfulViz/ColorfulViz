import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicline',
  templateUrl: './basicline.component.html',
  styleUrls: ['./basicline.component.css']
})
export class BasiclineComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  draw_Chart(){
    alert("可以使用！")
  }

  switchs(dom:any){
    console.log(dom.checked);
  }
}
