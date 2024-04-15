/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 925.0, "minX": 0.0, "maxY": 15650.0, "series": [{"data": [[0.0, 925.0], [0.1, 925.0], [0.2, 925.0], [0.3, 925.0], [0.4, 925.0], [0.5, 925.0], [0.6, 925.0], [0.7, 925.0], [0.8, 925.0], [0.9, 925.0], [1.0, 925.0], [1.1, 925.0], [1.2, 925.0], [1.3, 925.0], [1.4, 925.0], [1.5, 925.0], [1.6, 925.0], [1.7, 985.0], [1.8, 985.0], [1.9, 985.0], [2.0, 985.0], [2.1, 985.0], [2.2, 985.0], [2.3, 985.0], [2.4, 985.0], [2.5, 985.0], [2.6, 985.0], [2.7, 985.0], [2.8, 985.0], [2.9, 985.0], [3.0, 985.0], [3.1, 985.0], [3.2, 985.0], [3.3, 985.0], [3.4, 1090.0], [3.5, 1090.0], [3.6, 1090.0], [3.7, 1090.0], [3.8, 1090.0], [3.9, 1090.0], [4.0, 1090.0], [4.1, 1090.0], [4.2, 1090.0], [4.3, 1090.0], [4.4, 1090.0], [4.5, 1090.0], [4.6, 1090.0], [4.7, 1090.0], [4.8, 1090.0], [4.9, 1090.0], [5.0, 1090.0], [5.1, 1160.0], [5.2, 1160.0], [5.3, 1160.0], [5.4, 1160.0], [5.5, 1160.0], [5.6, 1160.0], [5.7, 1160.0], [5.8, 1160.0], [5.9, 1160.0], [6.0, 1160.0], [6.1, 1160.0], [6.2, 1160.0], [6.3, 1160.0], [6.4, 1160.0], [6.5, 1160.0], [6.6, 1160.0], [6.7, 1160.0], [6.8, 1467.0], [6.9, 1467.0], [7.0, 1467.0], [7.1, 1467.0], [7.2, 1467.0], [7.3, 1467.0], [7.4, 1467.0], [7.5, 1467.0], [7.6, 1467.0], [7.7, 1467.0], [7.8, 1467.0], [7.9, 1467.0], [8.0, 1467.0], [8.1, 1467.0], [8.2, 1467.0], [8.3, 1467.0], [8.4, 1467.0], [8.5, 1615.0], [8.6, 1615.0], [8.7, 1615.0], [8.8, 1615.0], [8.9, 1615.0], [9.0, 1615.0], [9.1, 1615.0], [9.2, 1615.0], [9.3, 1615.0], [9.4, 1615.0], [9.5, 1615.0], [9.6, 1615.0], [9.7, 1615.0], [9.8, 1615.0], [9.9, 1615.0], [10.0, 1615.0], [10.1, 1615.0], [10.2, 2153.0], [10.3, 2153.0], [10.4, 2153.0], [10.5, 2153.0], [10.6, 2153.0], [10.7, 2153.0], [10.8, 2153.0], [10.9, 2153.0], [11.0, 2153.0], [11.1, 2153.0], [11.2, 2153.0], [11.3, 2153.0], [11.4, 2153.0], [11.5, 2153.0], [11.6, 2153.0], [11.7, 2153.0], [11.8, 2153.0], [11.9, 2167.0], [12.0, 2167.0], [12.1, 2167.0], [12.2, 2167.0], [12.3, 2167.0], [12.4, 2167.0], [12.5, 2167.0], [12.6, 2167.0], [12.7, 2167.0], [12.8, 2167.0], [12.9, 2167.0], [13.0, 2167.0], [13.1, 2167.0], [13.2, 2167.0], [13.3, 2167.0], [13.4, 2167.0], [13.5, 2167.0], [13.6, 2701.0], [13.7, 2701.0], [13.8, 2701.0], [13.9, 2701.0], [14.0, 2701.0], [14.1, 2701.0], [14.2, 2701.0], [14.3, 2701.0], [14.4, 2701.0], [14.5, 2701.0], [14.6, 2701.0], [14.7, 2701.0], [14.8, 2701.0], [14.9, 2701.0], [15.0, 2701.0], [15.1, 2701.0], [15.2, 2701.0], [15.3, 2801.0], [15.4, 2801.0], [15.5, 2801.0], [15.6, 2801.0], [15.7, 2801.0], [15.8, 2801.0], [15.9, 2801.0], [16.0, 2801.0], [16.1, 2801.0], [16.2, 2801.0], [16.3, 2801.0], [16.4, 2801.0], [16.5, 2801.0], [16.6, 2801.0], [16.7, 2801.0], [16.8, 2801.0], [16.9, 2801.0], [17.0, 2832.0], [17.1, 2832.0], [17.2, 2832.0], [17.3, 2832.0], [17.4, 2832.0], [17.5, 2832.0], [17.6, 2832.0], [17.7, 2832.0], [17.8, 2832.0], [17.9, 2832.0], [18.0, 2832.0], [18.1, 2832.0], [18.2, 2832.0], [18.3, 2832.0], [18.4, 2832.0], [18.5, 2832.0], [18.6, 2832.0], [18.7, 2889.0], [18.8, 2889.0], [18.9, 2889.0], [19.0, 2889.0], [19.1, 2889.0], [19.2, 2889.0], [19.3, 2889.0], [19.4, 2889.0], [19.5, 2889.0], [19.6, 2889.0], [19.7, 2889.0], [19.8, 2889.0], [19.9, 2889.0], [20.0, 2889.0], [20.1, 2889.0], [20.2, 2889.0], [20.3, 2889.0], [20.4, 3467.0], [20.5, 3467.0], [20.6, 3467.0], [20.7, 3467.0], [20.8, 3467.0], [20.9, 3467.0], [21.0, 3467.0], [21.1, 3467.0], [21.2, 3467.0], [21.3, 3467.0], [21.4, 3467.0], [21.5, 3467.0], [21.6, 3467.0], [21.7, 3467.0], [21.8, 3467.0], [21.9, 3467.0], [22.0, 3467.0], [22.1, 3638.0], [22.2, 3638.0], [22.3, 3638.0], [22.4, 3638.0], [22.5, 3638.0], [22.6, 3638.0], [22.7, 3638.0], [22.8, 3638.0], [22.9, 3638.0], [23.0, 3638.0], [23.1, 3638.0], [23.2, 3638.0], [23.3, 3638.0], [23.4, 3638.0], [23.5, 3638.0], [23.6, 3638.0], [23.7, 3638.0], [23.8, 3698.0], [23.9, 3698.0], [24.0, 3698.0], [24.1, 3698.0], [24.2, 3698.0], [24.3, 3698.0], [24.4, 3698.0], [24.5, 3698.0], [24.6, 3698.0], [24.7, 3698.0], [24.8, 3698.0], [24.9, 3698.0], [25.0, 3698.0], [25.1, 3698.0], [25.2, 3698.0], [25.3, 3698.0], [25.4, 3698.0], [25.5, 3729.0], [25.6, 3729.0], [25.7, 3729.0], [25.8, 3729.0], [25.9, 3729.0], [26.0, 3729.0], [26.1, 3729.0], [26.2, 3729.0], [26.3, 3729.0], [26.4, 3729.0], [26.5, 3729.0], [26.6, 3729.0], [26.7, 3729.0], [26.8, 3729.0], [26.9, 3729.0], [27.0, 3729.0], [27.1, 3729.0], [27.2, 3772.0], [27.3, 3772.0], [27.4, 3772.0], [27.5, 3772.0], [27.6, 3772.0], [27.7, 3772.0], [27.8, 3772.0], [27.9, 3772.0], [28.0, 3772.0], [28.1, 3772.0], [28.2, 3772.0], [28.3, 3772.0], [28.4, 3772.0], [28.5, 3772.0], [28.6, 3772.0], [28.7, 3772.0], [28.8, 3772.0], [28.9, 3810.0], [29.0, 3810.0], [29.1, 3810.0], [29.2, 3810.0], [29.3, 3810.0], [29.4, 3810.0], [29.5, 3810.0], [29.6, 3810.0], [29.7, 3810.0], [29.8, 3810.0], [29.9, 3810.0], [30.0, 3810.0], [30.1, 3810.0], [30.2, 3810.0], [30.3, 3810.0], [30.4, 3810.0], [30.5, 3810.0], [30.6, 4101.0], [30.7, 4101.0], [30.8, 4101.0], [30.9, 4101.0], [31.0, 4101.0], [31.1, 4101.0], [31.2, 4101.0], [31.3, 4101.0], [31.4, 4101.0], [31.5, 4101.0], [31.6, 4101.0], [31.7, 4101.0], [31.8, 4101.0], [31.9, 4101.0], [32.0, 4101.0], [32.1, 4101.0], [32.2, 4101.0], [32.3, 4463.0], [32.4, 4463.0], [32.5, 4463.0], [32.6, 4463.0], [32.7, 4463.0], [32.8, 4463.0], [32.9, 4463.0], [33.0, 4463.0], [33.1, 4463.0], [33.2, 4463.0], [33.3, 4463.0], [33.4, 4463.0], [33.5, 4463.0], [33.6, 4463.0], [33.7, 4463.0], [33.8, 4463.0], [33.9, 5028.0], [34.0, 5028.0], [34.1, 5028.0], [34.2, 5028.0], [34.3, 5028.0], [34.4, 5028.0], [34.5, 5028.0], [34.6, 5028.0], [34.7, 5028.0], [34.8, 5028.0], [34.9, 5028.0], [35.0, 5028.0], [35.1, 5028.0], [35.2, 5028.0], [35.3, 5028.0], [35.4, 5028.0], [35.5, 5028.0], [35.6, 5096.0], [35.7, 5096.0], [35.8, 5096.0], [35.9, 5096.0], [36.0, 5096.0], [36.1, 5096.0], [36.2, 5096.0], [36.3, 5096.0], [36.4, 5096.0], [36.5, 5096.0], [36.6, 5096.0], [36.7, 5096.0], [36.8, 5096.0], [36.9, 5096.0], [37.0, 5096.0], [37.1, 5096.0], [37.2, 5096.0], [37.3, 5433.0], [37.4, 5433.0], [37.5, 5433.0], [37.6, 5433.0], [37.7, 5433.0], [37.8, 5433.0], [37.9, 5433.0], [38.0, 5433.0], [38.1, 5433.0], [38.2, 5433.0], [38.3, 5433.0], [38.4, 5433.0], [38.5, 5433.0], [38.6, 5433.0], [38.7, 5433.0], [38.8, 5433.0], [38.9, 5433.0], [39.0, 5779.0], [39.1, 5779.0], [39.2, 5779.0], [39.3, 5779.0], [39.4, 5779.0], [39.5, 5779.0], [39.6, 5779.0], [39.7, 5779.0], [39.8, 5779.0], [39.9, 5779.0], [40.0, 5779.0], [40.1, 5779.0], [40.2, 5779.0], [40.3, 5779.0], [40.4, 5779.0], [40.5, 5779.0], [40.6, 5779.0], [40.7, 6004.0], [40.8, 6004.0], [40.9, 6004.0], [41.0, 6004.0], [41.1, 6004.0], [41.2, 6004.0], [41.3, 6004.0], [41.4, 6004.0], [41.5, 6004.0], [41.6, 6004.0], [41.7, 6004.0], [41.8, 6004.0], [41.9, 6004.0], [42.0, 6004.0], [42.1, 6004.0], [42.2, 6004.0], [42.3, 6004.0], [42.4, 6765.0], [42.5, 6765.0], [42.6, 6765.0], [42.7, 6765.0], [42.8, 6765.0], [42.9, 6765.0], [43.0, 6765.0], [43.1, 6765.0], [43.2, 6765.0], [43.3, 6765.0], [43.4, 6765.0], [43.5, 6765.0], [43.6, 6765.0], [43.7, 6765.0], [43.8, 6765.0], [43.9, 6765.0], [44.0, 6765.0], [44.1, 7332.0], [44.2, 7332.0], [44.3, 7332.0], [44.4, 7332.0], [44.5, 7332.0], [44.6, 7332.0], [44.7, 7332.0], [44.8, 7332.0], [44.9, 7332.0], [45.0, 7332.0], [45.1, 7332.0], [45.2, 7332.0], [45.3, 7332.0], [45.4, 7332.0], [45.5, 7332.0], [45.6, 7332.0], [45.7, 7332.0], [45.8, 7420.0], [45.9, 7420.0], [46.0, 7420.0], [46.1, 7420.0], [46.2, 7420.0], [46.3, 7420.0], [46.4, 7420.0], [46.5, 7420.0], [46.6, 7420.0], [46.7, 7420.0], [46.8, 7420.0], [46.9, 7420.0], [47.0, 7420.0], [47.1, 7420.0], [47.2, 7420.0], [47.3, 7420.0], [47.4, 7420.0], [47.5, 7533.0], [47.6, 7533.0], [47.7, 7533.0], [47.8, 7533.0], [47.9, 7533.0], [48.0, 7533.0], [48.1, 7533.0], [48.2, 7533.0], [48.3, 7533.0], [48.4, 7533.0], [48.5, 7533.0], [48.6, 7533.0], [48.7, 7533.0], [48.8, 7533.0], [48.9, 7533.0], [49.0, 7533.0], [49.1, 7533.0], [49.2, 8178.0], [49.3, 8178.0], [49.4, 8178.0], [49.5, 8178.0], [49.6, 8178.0], [49.7, 8178.0], [49.8, 8178.0], [49.9, 8178.0], [50.0, 8178.0], [50.1, 8178.0], [50.2, 8178.0], [50.3, 8178.0], [50.4, 8178.0], [50.5, 8178.0], [50.6, 8178.0], [50.7, 8178.0], [50.8, 8178.0], [50.9, 8652.0], [51.0, 8652.0], [51.1, 8652.0], [51.2, 8652.0], [51.3, 8652.0], [51.4, 8652.0], [51.5, 8652.0], [51.6, 8652.0], [51.7, 8652.0], [51.8, 8652.0], [51.9, 8652.0], [52.0, 8652.0], [52.1, 8652.0], [52.2, 8652.0], [52.3, 8652.0], [52.4, 8652.0], [52.5, 8652.0], [52.6, 8756.0], [52.7, 8756.0], [52.8, 8756.0], [52.9, 8756.0], [53.0, 8756.0], [53.1, 8756.0], [53.2, 8756.0], [53.3, 8756.0], [53.4, 8756.0], [53.5, 8756.0], [53.6, 8756.0], [53.7, 8756.0], [53.8, 8756.0], [53.9, 8756.0], [54.0, 8756.0], [54.1, 8756.0], [54.2, 8756.0], [54.3, 8789.0], [54.4, 8789.0], [54.5, 8789.0], [54.6, 8789.0], [54.7, 8789.0], [54.8, 8789.0], [54.9, 8789.0], [55.0, 8789.0], [55.1, 8789.0], [55.2, 8789.0], [55.3, 8789.0], [55.4, 8789.0], [55.5, 8789.0], [55.6, 8789.0], [55.7, 8789.0], [55.8, 8789.0], [55.9, 8789.0], [56.0, 8866.0], [56.1, 8866.0], [56.2, 8866.0], [56.3, 8866.0], [56.4, 8866.0], [56.5, 8866.0], [56.6, 8866.0], [56.7, 8866.0], [56.8, 8866.0], [56.9, 8866.0], [57.0, 8866.0], [57.1, 8866.0], [57.2, 8866.0], [57.3, 8866.0], [57.4, 8866.0], [57.5, 8866.0], [57.6, 8866.0], [57.7, 9010.0], [57.8, 9010.0], [57.9, 9010.0], [58.0, 9010.0], [58.1, 9010.0], [58.2, 9010.0], [58.3, 9010.0], [58.4, 9010.0], [58.5, 9010.0], [58.6, 9010.0], [58.7, 9010.0], [58.8, 9010.0], [58.9, 9010.0], [59.0, 9010.0], [59.1, 9010.0], [59.2, 9010.0], [59.3, 9010.0], [59.4, 9740.0], [59.5, 9740.0], [59.6, 9740.0], [59.7, 9740.0], [59.8, 9740.0], [59.9, 9740.0], [60.0, 9740.0], [60.1, 9740.0], [60.2, 9740.0], [60.3, 9740.0], [60.4, 9740.0], [60.5, 9740.0], [60.6, 9740.0], [60.7, 9740.0], [60.8, 9740.0], [60.9, 9740.0], [61.0, 9740.0], [61.1, 9868.0], [61.2, 9868.0], [61.3, 9868.0], [61.4, 9868.0], [61.5, 9868.0], [61.6, 9868.0], [61.7, 9868.0], [61.8, 9868.0], [61.9, 9868.0], [62.0, 9868.0], [62.1, 9868.0], [62.2, 9868.0], [62.3, 9868.0], [62.4, 9868.0], [62.5, 9868.0], [62.6, 9868.0], [62.7, 9868.0], [62.8, 10368.0], [62.9, 10368.0], [63.0, 10368.0], [63.1, 10368.0], [63.2, 10368.0], [63.3, 10368.0], [63.4, 10368.0], [63.5, 10368.0], [63.6, 10368.0], [63.7, 10368.0], [63.8, 10368.0], [63.9, 10368.0], [64.0, 10368.0], [64.1, 10368.0], [64.2, 10368.0], [64.3, 10368.0], [64.4, 10368.0], [64.5, 10405.0], [64.6, 10405.0], [64.7, 10405.0], [64.8, 10405.0], [64.9, 10405.0], [65.0, 10405.0], [65.1, 10405.0], [65.2, 10405.0], [65.3, 10405.0], [65.4, 10405.0], [65.5, 10405.0], [65.6, 10405.0], [65.7, 10405.0], [65.8, 10405.0], [65.9, 10405.0], [66.0, 10405.0], [66.1, 10405.0], [66.2, 10515.0], [66.3, 10515.0], [66.4, 10515.0], [66.5, 10515.0], [66.6, 10515.0], [66.7, 10515.0], [66.8, 10515.0], [66.9, 10515.0], [67.0, 10515.0], [67.1, 10515.0], [67.2, 10515.0], [67.3, 10515.0], [67.4, 10515.0], [67.5, 10515.0], [67.6, 10515.0], [67.7, 10515.0], [67.8, 11516.0], [67.9, 11516.0], [68.0, 11516.0], [68.1, 11516.0], [68.2, 11516.0], [68.3, 11516.0], [68.4, 11516.0], [68.5, 11516.0], [68.6, 11516.0], [68.7, 11516.0], [68.8, 11516.0], [68.9, 11516.0], [69.0, 11516.0], [69.1, 11516.0], [69.2, 11516.0], [69.3, 11516.0], [69.4, 11516.0], [69.5, 12069.0], [69.6, 12069.0], [69.7, 12069.0], [69.8, 12069.0], [69.9, 12069.0], [70.0, 12069.0], [70.1, 12069.0], [70.2, 12069.0], [70.3, 12069.0], [70.4, 12069.0], [70.5, 12069.0], [70.6, 12069.0], [70.7, 12069.0], [70.8, 12069.0], [70.9, 12069.0], [71.0, 12069.0], [71.1, 12069.0], [71.2, 12181.0], [71.3, 12181.0], [71.4, 12181.0], [71.5, 12181.0], [71.6, 12181.0], [71.7, 12181.0], [71.8, 12181.0], [71.9, 12181.0], [72.0, 12181.0], [72.1, 12181.0], [72.2, 12181.0], [72.3, 12181.0], [72.4, 12181.0], [72.5, 12181.0], [72.6, 12181.0], [72.7, 12181.0], [72.8, 12181.0], [72.9, 12440.0], [73.0, 12440.0], [73.1, 12440.0], [73.2, 12440.0], [73.3, 12440.0], [73.4, 12440.0], [73.5, 12440.0], [73.6, 12440.0], [73.7, 12440.0], [73.8, 12440.0], [73.9, 12440.0], [74.0, 12440.0], [74.1, 12440.0], [74.2, 12440.0], [74.3, 12440.0], [74.4, 12440.0], [74.5, 12440.0], [74.6, 12519.0], [74.7, 12519.0], [74.8, 12519.0], [74.9, 12519.0], [75.0, 12519.0], [75.1, 12519.0], [75.2, 12519.0], [75.3, 12519.0], [75.4, 12519.0], [75.5, 12519.0], [75.6, 12519.0], [75.7, 12519.0], [75.8, 12519.0], [75.9, 12519.0], [76.0, 12519.0], [76.1, 12519.0], [76.2, 12519.0], [76.3, 12712.0], [76.4, 12712.0], [76.5, 12712.0], [76.6, 12712.0], [76.7, 12712.0], [76.8, 12712.0], [76.9, 12712.0], [77.0, 12712.0], [77.1, 12712.0], [77.2, 12712.0], [77.3, 12712.0], [77.4, 12712.0], [77.5, 12712.0], [77.6, 12712.0], [77.7, 12712.0], [77.8, 12712.0], [77.9, 12712.0], [78.0, 12842.0], [78.1, 12842.0], [78.2, 12842.0], [78.3, 12842.0], [78.4, 12842.0], [78.5, 12842.0], [78.6, 12842.0], [78.7, 12842.0], [78.8, 12842.0], [78.9, 12842.0], [79.0, 12842.0], [79.1, 12842.0], [79.2, 12842.0], [79.3, 12842.0], [79.4, 12842.0], [79.5, 12842.0], [79.6, 12842.0], [79.7, 12973.0], [79.8, 12973.0], [79.9, 12973.0], [80.0, 12973.0], [80.1, 12973.0], [80.2, 12973.0], [80.3, 12973.0], [80.4, 12973.0], [80.5, 12973.0], [80.6, 12973.0], [80.7, 12973.0], [80.8, 12973.0], [80.9, 12973.0], [81.0, 12973.0], [81.1, 12973.0], [81.2, 12973.0], [81.3, 12973.0], [81.4, 13077.0], [81.5, 13077.0], [81.6, 13077.0], [81.7, 13077.0], [81.8, 13077.0], [81.9, 13077.0], [82.0, 13077.0], [82.1, 13077.0], [82.2, 13077.0], [82.3, 13077.0], [82.4, 13077.0], [82.5, 13077.0], [82.6, 13077.0], [82.7, 13077.0], [82.8, 13077.0], [82.9, 13077.0], [83.0, 13077.0], [83.1, 13187.0], [83.2, 13187.0], [83.3, 13187.0], [83.4, 13187.0], [83.5, 13187.0], [83.6, 13187.0], [83.7, 13187.0], [83.8, 13187.0], [83.9, 13187.0], [84.0, 13187.0], [84.1, 13187.0], [84.2, 13187.0], [84.3, 13187.0], [84.4, 13187.0], [84.5, 13187.0], [84.6, 13187.0], [84.7, 13187.0], [84.8, 13437.0], [84.9, 13437.0], [85.0, 13437.0], [85.1, 13437.0], [85.2, 13437.0], [85.3, 13437.0], [85.4, 13437.0], [85.5, 13437.0], [85.6, 13437.0], [85.7, 13437.0], [85.8, 13437.0], [85.9, 13437.0], [86.0, 13437.0], [86.1, 13437.0], [86.2, 13437.0], [86.3, 13437.0], [86.4, 13437.0], [86.5, 13511.0], [86.6, 13511.0], [86.7, 13511.0], [86.8, 13511.0], [86.9, 13511.0], [87.0, 13511.0], [87.1, 13511.0], [87.2, 13511.0], [87.3, 13511.0], [87.4, 13511.0], [87.5, 13511.0], [87.6, 13511.0], [87.7, 13511.0], [87.8, 13511.0], [87.9, 13511.0], [88.0, 13511.0], [88.1, 13511.0], [88.2, 13799.0], [88.3, 13799.0], [88.4, 13799.0], [88.5, 13799.0], [88.6, 13799.0], [88.7, 13799.0], [88.8, 13799.0], [88.9, 13799.0], [89.0, 13799.0], [89.1, 13799.0], [89.2, 13799.0], [89.3, 13799.0], [89.4, 13799.0], [89.5, 13799.0], [89.6, 13799.0], [89.7, 13799.0], [89.8, 13799.0], [89.9, 14380.0], [90.0, 14380.0], [90.1, 14380.0], [90.2, 14380.0], [90.3, 14380.0], [90.4, 14380.0], [90.5, 14380.0], [90.6, 14380.0], [90.7, 14380.0], [90.8, 14380.0], [90.9, 14380.0], [91.0, 14380.0], [91.1, 14380.0], [91.2, 14380.0], [91.3, 14380.0], [91.4, 14380.0], [91.5, 14380.0], [91.6, 14436.0], [91.7, 14436.0], [91.8, 14436.0], [91.9, 14436.0], [92.0, 14436.0], [92.1, 14436.0], [92.2, 14436.0], [92.3, 14436.0], [92.4, 14436.0], [92.5, 14436.0], [92.6, 14436.0], [92.7, 14436.0], [92.8, 14436.0], [92.9, 14436.0], [93.0, 14436.0], [93.1, 14436.0], [93.2, 14436.0], [93.3, 14486.0], [93.4, 14486.0], [93.5, 14486.0], [93.6, 14486.0], [93.7, 14486.0], [93.8, 14486.0], [93.9, 14486.0], [94.0, 14486.0], [94.1, 14486.0], [94.2, 14486.0], [94.3, 14486.0], [94.4, 14486.0], [94.5, 14486.0], [94.6, 14486.0], [94.7, 14486.0], [94.8, 14486.0], [94.9, 14486.0], [95.0, 15062.0], [95.1, 15062.0], [95.2, 15062.0], [95.3, 15062.0], [95.4, 15062.0], [95.5, 15062.0], [95.6, 15062.0], [95.7, 15062.0], [95.8, 15062.0], [95.9, 15062.0], [96.0, 15062.0], [96.1, 15062.0], [96.2, 15062.0], [96.3, 15062.0], [96.4, 15062.0], [96.5, 15062.0], [96.6, 15062.0], [96.7, 15379.0], [96.8, 15379.0], [96.9, 15379.0], [97.0, 15379.0], [97.1, 15379.0], [97.2, 15379.0], [97.3, 15379.0], [97.4, 15379.0], [97.5, 15379.0], [97.6, 15379.0], [97.7, 15379.0], [97.8, 15379.0], [97.9, 15379.0], [98.0, 15379.0], [98.1, 15379.0], [98.2, 15379.0], [98.3, 15379.0], [98.4, 15650.0], [98.5, 15650.0], [98.6, 15650.0], [98.7, 15650.0], [98.8, 15650.0], [98.9, 15650.0], [99.0, 15650.0], [99.1, 15650.0], [99.2, 15650.0], [99.3, 15650.0], [99.4, 15650.0], [99.5, 15650.0], [99.6, 15650.0], [99.7, 15650.0], [99.8, 15650.0], [99.9, 15650.0]], "isOverall": false, "label": "HTTP Request1", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 900.0, "maxY": 3.0, "series": [{"data": [[900.0, 2.0], [1000.0, 1.0], [1100.0, 1.0], [1400.0, 1.0], [1600.0, 1.0], [2100.0, 2.0], [2800.0, 3.0], [2700.0, 1.0], [3400.0, 1.0], [3600.0, 2.0], [3700.0, 2.0], [3800.0, 1.0], [4100.0, 1.0], [4400.0, 1.0], [5000.0, 2.0], [5400.0, 1.0], [5700.0, 1.0], [6000.0, 1.0], [6700.0, 1.0], [7300.0, 1.0], [7400.0, 1.0], [7500.0, 1.0], [8100.0, 1.0], [8700.0, 2.0], [8600.0, 1.0], [9000.0, 1.0], [8800.0, 1.0], [9700.0, 1.0], [9800.0, 1.0], [10300.0, 1.0], [10400.0, 1.0], [10500.0, 1.0], [11500.0, 1.0], [12000.0, 1.0], [12100.0, 1.0], [12500.0, 1.0], [12700.0, 1.0], [12400.0, 1.0], [12800.0, 1.0], [12900.0, 1.0], [13000.0, 1.0], [13100.0, 1.0], [13700.0, 1.0], [13500.0, 1.0], [13400.0, 1.0], [14300.0, 1.0], [14400.0, 2.0], [15000.0, 1.0], [15300.0, 1.0], [15600.0, 1.0]], "isOverall": false, "label": "HTTP Request1", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 15600.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 5.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 54.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 5.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 54.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 13.545454545454545, "minX": 1.6480221E12, "maxY": 22.458333333333346, "series": [{"data": [[1.64802216E12, 22.458333333333346], [1.6480221E12, 13.545454545454545]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.64802216E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 1937.0, "minX": 3.0, "maxY": 15062.0, "series": [{"data": [[33.0, 12712.0], [35.0, 15062.0], [34.0, 13437.666666666666], [36.0, 10576.25], [39.0, 5779.0], [38.0, 3965.0], [3.0, 5433.0], [4.0, 1937.0], [5.0, 5396.5], [6.0, 4311.5], [7.0, 3831.0], [8.0, 13187.0], [11.0, 11404.0], [12.0, 8050.5], [13.0, 2801.0], [14.0, 3772.0], [15.0, 5096.0], [16.0, 8756.0], [17.0, 7420.0], [18.0, 13077.0], [19.0, 8178.0], [20.0, 10072.5], [21.0, 7853.5], [22.0, 11695.0], [23.0, 9299.0], [26.0, 3809.0], [27.0, 8186.0], [28.0, 4110.333333333333], [29.0, 6231.0], [30.0, 12973.0], [31.0, 14084.5]], "isOverall": false, "label": "HTTP Request1", "isController": false}, {"data": [[20.79661016949152, 7943.322033898306]], "isOverall": false, "label": "HTTP Request1-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 39.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 22.916666666666668, "minX": 1.6480221E12, "maxY": 919.9, "series": [{"data": [[1.64802216E12, 919.9], [1.6480221E12, 210.73333333333332]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.64802216E12, 100.0], [1.6480221E12, 22.916666666666668]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.64802216E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 3689.6363636363635, "minX": 1.6480221E12, "maxY": 8918.125, "series": [{"data": [[1.64802216E12, 8918.125], [1.6480221E12, 3689.6363636363635]], "isOverall": false, "label": "HTTP Request1", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.64802216E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 3689.6363636363635, "minX": 1.6480221E12, "maxY": 8918.062499999996, "series": [{"data": [[1.64802216E12, 8918.062499999996], [1.6480221E12, 3689.6363636363635]], "isOverall": false, "label": "HTTP Request1", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.64802216E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 2606.4545454545455, "minX": 1.6480221E12, "maxY": 7431.708333333332, "series": [{"data": [[1.64802216E12, 7431.708333333332], [1.6480221E12, 2606.4545454545455]], "isOverall": false, "label": "HTTP Request1", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.64802216E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 925.0, "minX": 1.6480221E12, "maxY": 15650.0, "series": [{"data": [[1.64802216E12, 15650.0], [1.6480221E12, 9010.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.64802216E12, 14441.0], [1.6480221E12, 8965.8]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.64802216E12, 15650.0], [1.6480221E12, 9010.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.64802216E12, 15236.349999999999], [1.6480221E12, 9010.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.64802216E12, 2153.0], [1.6480221E12, 925.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.64802216E12, 9303.0], [1.6480221E12, 1615.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.64802216E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 5121.0, "minX": 1.0, "maxY": 9740.0, "series": [{"data": [[1.0, 5908.0], [2.0, 6369.5], [4.0, 5121.0], [8.0, 6668.0], [23.0, 9740.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 23.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 5121.0, "minX": 1.0, "maxY": 9740.0, "series": [{"data": [[1.0, 5908.0], [2.0, 6369.5], [4.0, 5121.0], [8.0, 6668.0], [23.0, 9740.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 23.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 0.4, "minX": 1.6480221E12, "maxY": 0.5833333333333334, "series": [{"data": [[1.64802216E12, 0.4], [1.6480221E12, 0.5833333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.64802216E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 0.18333333333333332, "minX": 1.6480221E12, "maxY": 0.8, "series": [{"data": [[1.64802216E12, 0.8], [1.6480221E12, 0.18333333333333332]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.64802216E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 0.18333333333333332, "minX": 1.6480221E12, "maxY": 0.8, "series": [{"data": [[1.64802216E12, 0.8], [1.6480221E12, 0.18333333333333332]], "isOverall": false, "label": "HTTP Request1-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.64802216E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 0.18333333333333332, "minX": 1.6480221E12, "maxY": 0.8, "series": [{"data": [[1.64802216E12, 0.8], [1.6480221E12, 0.18333333333333332]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.64802216E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

