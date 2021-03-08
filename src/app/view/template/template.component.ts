import { Component, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import * as $ from 'jquery';
import { asLiteral } from '@angular/compiler/src/render3/view/util';


@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})

export class TemplateComponent implements OnInit {



  constructor() { }

  ngOnInit(): void {


  }

  doChange() {
    //alert("滚动了");

    var scrollTop: any = 180;


    $('.right').children().each(function () {
      var eletop = $(this).offset().top;

      console.log('scroll' + $('.right').scrollTop());
      var wintop = eletop - scrollTop;
      //console.log($(this).height());
      var winbottom = eletop + $(this).height() - scrollTop;
      if (wintop < 0 && winbottom > 0) {
        //当前内容对应的菜单应该被选中
        var a = $(this).attr('a');
        $('.left button[b="' + a + '"]').addClass('active').siblings().removeClass('active');
        //此处return 表示结束结束循环的意思
        return;

      }

    })
  }

  onClick(b:any) {
    //alert("click!");
    //console.log($(this));
    
    console.log('b'+b);
    $('.left button[b="' + b + '"]').addClass('active').siblings().removeClass('active');

    var scrollTop:any = 0;
    var i;
    if(b != undefined){
      i = parseInt(b) - 1;
    }

    if(i != undefined){
      i = scrollTop + i * 400;
      console.log('i:'+ i);
      $('.right').animate({scrollTop:i},100)
      $('.right').scrollTop(i);
      
    }


  }

}