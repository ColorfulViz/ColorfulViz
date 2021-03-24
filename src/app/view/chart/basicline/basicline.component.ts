import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";
declare var index:any;


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

  change_Pic(e:any){
    $(".add_signal").css("display", "none");
    $(".word_signal").css("display", "none");
    $(".inputbutton").css("display", "none");
    var reads = new FileReader();
    let f:any = e.target.files[0];
    alert(f.name + "上传成功!")
    console.log(f);
    reads.readAsDataURL(f);
    reads.onload = function(){
      //console.log(reads.result);
      (<HTMLInputElement>document.getElementById('img3')).src = reads.result;
      console.log(<HTMLInputElement>document.getElementById('img3'));
      //console.log((<HTMLInputElement>document.getElementById('img3')).src);
      $("img").css("display", "block");
      index.handle(f);
    }
    
  }

  
}
