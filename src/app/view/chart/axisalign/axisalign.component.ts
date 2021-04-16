import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";
declare var index: any;
import * as echarts from 'echarts';
import { Axis } from 'echarts';

@Component({
  selector: 'app-axisalign',
  templateUrl: './axisalign.component.html',
  styleUrls: ['./axisalign.component.css']
})
export class AxisalignComponent implements OnInit {
  
  public color_select: boolean = false;  //判断颜色的设置方式
  public chart_select: boolean = false;
  public csv: any;
  public static colors: any[] = [];//用户上传后提取的颜色数组
  public data_json: string = "";
  public myDataset: any[] = [];
  public xAxisName: string = "";
  public yAxisName: string = "";
  public static chart_color: any;  //画图所用颜色
  public static bar_color: any;
  public static axis_color: any;

  public default_colors: any[] = ["#d16456", "#36689e", "#9745a1", "#d7b24e", "#5ba851",
    "#efb798", "#e7d192", "#89e0ae", "#7e88d3", "#98d0ef"];
  
  constructor() { }

  ngOnInit(): void {
  }

  setColor(e: any) {
    var a = $(e.target).attr('a');
    console.log(a);
    var index;
    if (a != undefined)
      index = parseInt(a);
    AxisalignComponent.chart_color = this.default_colors[index - 1];
    AxisalignComponent.bar_color = this.default_colors[Math.round(Math.random()*9)];
    AxisalignComponent.axis_color = this.default_colors[Math.round(Math.random()*9)];
    console.log(AxisalignComponent.chart_color);
    console.log(AxisalignComponent.bar_color);
    alert("颜色选择成功！")
  }

  submit() {
    //console.log(this.xAxisName);
    //console.log(this.yAxisName);
    var arr = this.myDataset[0];
    console.log(arr);
    if (arr.indexOf(this.xAxisName) == -1) {
      alert("您输入的x轴不存在！")
      this.xAxisName = "";
    }
    else if (arr.indexOf(this.yAxisName) == -1) {
      alert("您输入的y轴不存在！")
      this.yAxisName = "";
    }
    // else{
    //   alert("设置成功！");
    // }
  }

  ConvertJSONtoArray() {
    this.data_json = this.data_json.replace(/\\r\\n/g, '\n');

    console.log(this.data_json);
    this.myDataset = this.data_json.split(/\n/);
    this.myDataset[this.myDataset.length - 1] = this.myDataset[this.myDataset.length - 1].substring(0,this.myDataset[this.myDataset.length - 1].length - 1);
    console.log(this.myDataset);
    var i = 0;
    for (; i < this.myDataset.length; i++) {
      //console.log(this.myDataset[i]);
      this.myDataset[i] = this.myDataset[i].split(/,/);
    }
    if(this.myDataset[i-1].length == 1 && this.myDataset[i-1][0] == ""){
      this.myDataset.pop();
    }
    this.myDataset[0][0] = this.myDataset[0][0].substring(1,this.myDataset[0][0].length);
    console.log(this.myDataset);
  }

  ConvertCSVtoJSON() {
    alert("上传成功！");
    //console.log(typeof (JSON.stringify(this.csv)));
    this.data_json = JSON.stringify(this.csv);
    //console.log(this.data_json);
  }

  handleFileSelect(e: any) {
    $(".add_signal_f").css("display", "none");
    $(".updatefile").css("display", "none");
    $(".word_signal_f").css("display", "none");
    $(".img_file").css("display", "block");
    var files = e.target.files; // FileList object
    var file = files[0];
    console.log(file.name);
    var reader = new FileReader();
    reader.readAsText(file);
    reader.onload = (event: any) => {
      this.csv = event.target.result; // Content of CSV file
      console.log(this.csv);
      this.ConvertCSVtoJSON();
      this.ConvertJSONtoArray();
    }
  }

  public static getColors(color: any[]) {
    console.log("colors got!");
    AxisalignComponent.colors = color;
    console.log(AxisalignComponent.colors);
    AxisalignComponent.chart_color = AxisalignComponent.colors[0].name;
    AxisalignComponent.bar_color = AxisalignComponent.colors[3].name;
    AxisalignComponent.axis_color = AxisalignComponent.colors[1].name;
  }

  change_Pic(e: any) {
    $(".add_signal").css("display", "none");
    $(".word_signal").css("display", "none");
    $(".inputbutton").css("display", "none");
    var reads = new FileReader();
    let f: any = e.target.files[0];
    alert(f.name + "上传成功!")
    console.log(f);
    reads.readAsDataURL(f);
    reads.onload = function () {
      //console.log(reads.result);
      (<HTMLInputElement>document.getElementById('img3')).src = reads.result;
      console.log(<HTMLInputElement>document.getElementById('img3'));
      //console.log((<HTMLInputElement>document.getElementById('img3')).src);
      $(".img_pic").css("display", "block");
      index.handle(f, AxisalignComponent.getColors);
    }
  }

  draw_Chart() {
    //alert("画图成功！");
    //console.log(BarsimpleComponent.chart_color);
    var myChart = echarts.init(document.getElementById('main'));
    var option = {
      dataset:{
          source: this.myDataset
      },
      title: {
          text: "Axis Align Chart",
          textStyle:{
              color: AxisalignComponent.axis_color
          }
      },
      legend: {
          type: 'scroll',
          bottom: 10,
      },
      tooltip: {
          trigger: 'axis',
          axisPointer: {
              type: 'shadow'
          }
      },
      grid: {
          containLabel: true
      },
      backgroundColor: "white",
      xAxis: {
          type: 'category',
          //boundaryGap:false,
          name: this.xAxisName,
          nameTextStyle:{
              color: AxisalignComponent.axis_color
              //fontFamily: '微软雅黑'
          },
          axisLine:{
              lineStyle:{
                  color: AxisalignComponent.axis_color
              },
              show:true
          },
          axisTick:{
              show:true,
              lineStyle:{
                  color: AxisalignComponent.axis_color
              },
              alignWithLabel: true
          },
          axisLabel:{
              show: true,
              color: AxisalignComponent.axis_color
          }
      },
      yAxis: {
          type: 'value',
          name: this.yAxisName,
          nameTextStyle:{
              color:AxisalignComponent.axis_color
              //fontFamily: '微软雅黑'
          },
          axisLine:{
              lineStyle:{
                  color: AxisalignComponent.axis_color
              },
              show:true
          },
          axisTick:{
              show:true,
              lineStyle:{
                  color: AxisalignComponent.axis_color
              }
          },
          axisLabel:{
              show: true,
              color: AxisalignComponent.axis_color
          },
          splitLine:{
              lineStyle:{
                  color: [AxisalignComponent.axis_color],
                  opacity: 0.2
              }
          }
      },
      series: [{
          name: this.yAxisName,
          encode:{
              x: this.xAxisName,
              y: this.yAxisName
          },
          // seriesLayoutBy: 'row',
          type: 'bar',
          barWidth: '60%',
          color: AxisalignComponent.bar_color          
      }]
  };
    myChart.setOption(option);
  }
}
