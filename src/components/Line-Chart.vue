
<template>
  <!-- <header> -->
    <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->

    <!-- <div class="wrapper"> -->
      <!-- <HelloWorld msg="You did it!" /> -->

      <!-- <nav> -->
        <!-- <RouterLink to="/">Home</RouterLink> -->
        <!-- <RouterLink to="/about">About</RouterLink> -->
      <!-- </nav> -->
    <!-- </div> -->
  <!-- </header> -->
<div id='container'></div>
  <!-- <RouterView /> -->
</template>
<script setup>
//import { RouterLink, RouterView } from 'vue-router'
//import HelloWorld from './components/HelloWorld.vue'
import { Chart } from '@antv/g2';

import { ref, onMounted } from 'vue'
const data = [
  { year: '2022-10-13', value: 0 },
  { year: '2022-10-14', value: 0 },
  { year: '2022-10-15', value: 0 },
  { year: '2022-10-16', value: 10 },
  { year: '2022-10-17', value: 0 },
];
//console.log(document.getElementById('container'))
onMounted(() => {
const chart = new Chart({
  container: 'container',
  //autoFit: true,
  height: 300,
  width:600
});
chart.data(data);
chart.scale({
  year: {
    range: [0, 1],
  },
  value: {
    min: 0,
    max:100,
    nice: true,
  },
});

chart.axis('year', {
          label: {
      textstyle: {
      // textAlign: 'center', // 文本对齐方向，可取值为： start middle end
      fill: 'red', // 文本的颜色
      //fontSize: '12', // 文本大小
      //fontWeight: 'bold', // 文本粗细
            }
                },
       grid: {
    //   lineStyle: {
      //  lineWidth: 1,
      //  lineDash: [ 2, 2 ]
    // }
  },
   tickLine: {
    lineWidth: 2,
    length: 10,
    stroke: 'red',
    alignWithLabel:true
  }
    });
chart.axis('value', {
          label: {
            //offset: 5,
            // formatter: function formatter(val) { // 格式化
            //   return val +' -';
            //   },
  //   textStyle: {
  //   textAlign: 'center', // 文本对齐方向，可取值为： start center end
  //   fill: '#404040', // 文本的颜色
  //   fontSize: '12', // 文本大小
  //   fontWeight: 'bold', // 文本粗细
  //   textBaseline: 'top' // 文本基准线，可取 top middle bottom，默认为middle
  // } 
     },
        tickLine: {
    lineWidth: 2,
    length: 5,
    stroke: 'red',
    alignWithLabel:true
  }
    });
    chart.legend({
	      custom: true,
	      position: "top",
        offsetX:200,
	      flipPage: false,
	      items: [
	        {
	          name: "空值数量",
	          marker: {
	            symbol: 'circle',
	            style:{
	              fill: "#6395f9"
	            },
	          },
	        },
	      ]
	    })        

chart.tooltip({
  showCrosshairs: true, // 展示 Tooltip 辅助线
  shared: true,
});
//chart.coordinate();
chart.line().position('year*value').label('value');
chart.point().position('year*value');
chart.render();
})
</script>

<style scoped>
</style>
