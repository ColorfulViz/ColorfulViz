import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";

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
    //   getTopColors(10,reads.result);
    //   function getTopColors(k:any, imgData:any) {

    //     var pixelArray = [];
    //     for (var i = 0, offset, r, g, b, a; i < imgData.length; i = i + 4) {
    //         offset = i * 4;
    //         r = imgData[offset + 0];
    //         g = imgData[offset + 1];
    //         b = imgData[offset + 2];
    //         a = imgData[offset + 3];
    
    //         if (a >= 125) {
    //             if (!(r > 250 && g > 250 && b > 250)) {
    //                 pixelArray.push([r, g, b]);
    //             }
    //         }
    //     }
        
    //     new Kmeans(pixelArray, k, function(err: any, cluster: any[], centroids: any) {
    
    //         cluster.sort((a: string | any[], b: string | any[]) => {
    //             if (a.length > b.length) {
    //                 return -1;
    //             } else return 1
    //         })
    
    //         try {
    //             var main = [];
    //             cluster.forEach((list: string | any[]) => {
    //                 if (main.length == 5)
    //                     throw new Error("LoopTerminates");
    
    //                 if (list) {
    //                     var t = [0, 0, 0];
    //                     for (let i = 0; i < list.length; i++) {
    //                         t[0] += list[i][0];
    //                         t[1] += list[i][1];
    //                         t[2] += list[i][2];
    //                     }
    
    //                     t[0] = Math.round(t[0] / list.length);
    //                     t[1] = Math.round(t[1] / list.length);
    //                     t[2] = Math.round(t[2] / list.length);
    //                 }
    
    //                 main.push({
    //                     name: [t[0], t[1], t[2]],
    //                     value: list.length
    //                 });
    //             });
    //         } catch (e) {
    //             if (e.message !== "LoopTerminates") throw e;
    //         };
    
    //         while (main.length < 5) {
    //             var r0 = main[0].name[0] + Math.round(Math.random() * 20);
    //             var r1 = main[0].name[1] + Math.round(Math.random() * 20);
    //             var r2 = main[0].name[2] + Math.round(Math.random() * 20);
    //             main.push({
    //                 name: [r0, r1, r2],
    //                 value: 1000
    //             });
    //         }
    
    //         main.forEach(l => {
    //             var t = l.name;
    //             l.name = `rgb(${t[0]},${t[1]},${t[2]})`;
    //         });
    
    //         console.log(main);
    
    //         // drawPie(main);
    //         // drawLine(main);
    
    
    //     })
    
    // }
    }
  }

  
}
