import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicline',
  templateUrl: './basicline.component.html',
  styleUrls: ['./basicline.component.css']
})
export class BasiclineComponent implements OnInit {

  public color_select:boolean = false;  //判断颜色的设置方式
  public chart_select:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  draw_Chart(){
    alert("可以使用！")
  }

  
}
