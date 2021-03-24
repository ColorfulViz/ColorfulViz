


// Initialize
// ----------
function Kmeans(vector, k, callback){
    //**Vector:** array of arrays. Inner array
    //represents a multidimensional data point (vector)  
    //*These should be normalized*
    this.callback = callback
    this.vector = vector
    //**K:** represents the number of groups/clusters into 
    //which the vectors will be grouped
    this.k = k
    //Initialize the centroids and clusters     
    //**Centroids:** represent the center of each cluster. 
    //They are taken by averaging each dimension of the vectors
    this.centroids = new Array(k)
    this.cluster = new Array(k)

    //Create centroids and place them randomly because 
    //we don't yet know where the vectors are most concentrated

    this.createCentroids()
    var count = 0,
        notFinished = true

    this.iterate(this.centroids.slice(0))
}

// Assign vector to each centroid
// ----------
// Randomly choose **k** vectors from the vector 
// array **vector**. These represent our guess 
// at where clusters may exist. 
Kmeans.prototype.createCentroids = function () {
    var randomArray = this.vector.slice(0)
    var self = this
    randomArray.sort(function () {
        return (Math.floor(Math.random() * self.vector.length))
    });
    this.centroids = randomArray.slice(0, this.k);
}

// Recursively cluster and move the centroids
// ----------
//This method groups vectors into clusters and then determine the 
//the new location for each centroid based upon the mean
//location of the vectors in the cooresponding cluster
Kmeans.prototype.iterate = function (vecArray) {

    this.cluster = new Array(this.k)

    var tempArray = []
    for (var a = 0; a < this.vector[0].length; a++) {
        tempArray.push(0)
    }
    var vecArray = []
    for (var a = 0; a < this.k; a++) {
        vecArray[a] = (tempArray.slice(0))
    }
    //Group each vector to a cluster based upon the 
    //cooresponding centroid
    for (i in this.vector) {
        var v = this.vector[i].slice(0)
        var index = this.assignCentroid(v)

        if (!this.cluster[index]) this.cluster[index] = []
        this.cluster[index].push(v)

        for (var a = 0; a < v.length; a++) {
            vecArray[index][a] += v[a] //keep a sum for cluster
        }
    }

    //Calculate the mean values for each cluster.
    var distance, max = 0

    for (var a = 0; a < this.k; a++) {

        var clusterSize = 0 //cluster is empty
        if (this.cluster[a]) clusterSize = this.cluster[a].length

        for (b in vecArray[a]) {
            vecArray[a][b] = vecArray[a][b] / clusterSize
        }
        distance = this.distance(vecArray[a], this.centroids[a])
        if (distance > max)
            max = distance
    }

    if (max <= 0.5)
        return this.callback(null, this.cluster, this.centroids)

    //For each centroid use the mean calculated for the 
    //corresponding cluster (effectively "moving" the centroid
    //to its new "location")
    for (z in vecArray) {
        this.centroids[z] = vecArray[z].slice(0)
    }
    this.iterate(vecArray)

}


// Determine the closest centroid to a vector
// ----------
Kmeans.prototype.assignCentroid = function (point) {
    var min = Infinity,
        res = 0

    //For each vector we determine the distance to the 
    //nearest centroid. The vector is assigned to the 
    //cluster that corresponds to the nearest centroid.
    for (i in this.centroids) {
        dist = this.distance(point, this.centroids[i])
        if (dist < min) {
            min = dist
            res = i
        }
    }
    return res
}

// Calculate euclidian distance between vectors
// ----------
Kmeans.prototype.distance = function (v1, v2) {
    var total = 0
    for (c in v1) {
        if (c != 0)
            total += Math.pow(v2[c] - v1[c], 2)
    }
    return Math.sqrt(total)
}

var index = {

    changepic() {
        var f = document.getElementById('file').files[0];
        handle(f);
    },
    
    handle(pho) {
        var canvas_obj = document.getElementById("myCanvas");
        var ctx = canvas_obj.getContext("2d");
    
        var img = new Image();
        img.src = getObjectURL(pho);
    
        img.onload = function() {
            ctx.drawImage(img, 10, 10, 300, 300);
            var imgData_obj = ctx.getImageData(0, 0, canvas_obj.width, canvas_obj.height);
            var imgData = imgData_obj.data;
    
            getTopColors(10, imgData)
        };
    },
    
    
    drawPie(data) {
        var dom = document.getElementById("pie");
        var myChart = echarts.init(dom);
        var app = {};
        var option = null;
        option = {
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c} ({d}%)'
            },
            series: [{
                type: 'pie',
                radius: '55%',
                center: ['50%', '60%'],
                data: data,
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                },
                itemStyle: {
                    color: (params) => {
                        return params.data.name
                    }
                }
            }]
        };;
        if (option && typeof option === "object") {
            myChart.setOption(option, true);
        }
    },
    
    drawLine(data) {
        var dom = document.getElementById("line");
        var myChart = echarts.init(dom);
        var app = {};
        var option = null;
        option = {
            xAxis: {
                type: 'category',
                data: data.map(item => item.name)
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: data.map(item => item.value),
                type: 'bar',
                showBackground: true,
                backgroundStyle: {
                    color: 'transparent'
                },
                itemStyle: {
                    normal: {
                        color: (params) => {
                            return params.name
                        }
                    }
                }
            }]
        };;
        if (option && typeof option === "object") {
            myChart.setOption(option, true);
        }
    }
}

function getObjectURL(file) {
    var url = null;
    if (window.createObjcectURL != undefined) {
        url = window.createOjcectURL(file);
    } else if (window.URL != undefined) {
        url = window.URL.createObjectURL(file);
    } else if (window.webkitURL != undefined) {
        url = window.webkitURL.createObjectURL(file);
    }
    return url;
}

function sortNumber(a, b) {
    return a - b
}

function getTopColors(k, imgData) {

    var pixelArray = new Array();
    for (var i = 0, offset, r, g, b, a; i < imgData.length; i = i + 4) {
        offset = i * 4;
        r = imgData[offset + 0];
        g = imgData[offset + 1];
        b = imgData[offset + 2];
        a = imgData[offset + 3];

        if (a >= 125) {
            if (!(r > 250 && g > 250 && b > 250)) {
                pixelArray.push([r, g, b]);
            }
        }
    }


    new Kmeans(pixelArray, k, function(err, cluster, centroids) {

        cluster.sort((a, b) => {
            if (a.length > b.length) {
                return -1;
            } else return 1
        })

        try {
            var main = [];
            cluster.forEach(list => {
                if (main.length == 5)
                    throw new Error("LoopTerminates");

                if (list) {
                    var t = [0, 0, 0];
                    for (let i = 0; i < list.length; i++) {
                        t[0] += list[i][0];
                        t[1] += list[i][1];
                        t[2] += list[i][2];
                    }

                    t[0] = Math.round(t[0] / list.length);
                    t[1] = Math.round(t[1] / list.length);
                    t[2] = Math.round(t[2] / list.length);
                }

                main.push({
                    name: [t[0], t[1], t[2]],
                    value: list.length
                });
            });
        } catch (e) {
            if (e.message !== "LoopTerminates") throw e;
        };

        while (main.length < 5) {
            var r0 = main[0].name[0] + Math.round(Math.random() * 20);
            var r1 = main[0].name[1] + Math.round(Math.random() * 20);
            var r2 = main[0].name[2] + Math.round(Math.random() * 20);
            main.push({
                name: [r0, r1, r2],
                value: 1000
            });
        }

        main.forEach(l => {
            var t = l.name;
            l.name = `rgb(${t[0]},${t[1]},${t[2]})`;
        });

        console.log(main);

        // drawPie(main);
        // drawLine(main);


    })

}