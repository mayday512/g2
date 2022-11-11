
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
//console.log(document.getElementById('container'))
onMounted(() => {

const data = [
  { year: '2022-10-13', value: 0 },
  { year: '2022-10-14', value: 0 },
  { year: '2022-10-15', value: 0 },
  { year: '2022-10-16', value: 10 },
  { year: '2022-10-17', value: 0 },
];
const chart = new Chart({
  container: 'container',
  autoFit: true,
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
      textStyle: {
      textAlign: 'center', // 文本对齐方向，可取值为： start middle end
      fill: '#404040', // 文本的颜色
      fontSize: '12', // 文本大小
      fontWeight: 'bold', // 文本粗细
               }
                },
       grid: {
      lineStyle: {
      lineWidth: 1,
      lineDash: [ 2, 2 ]
    }
  }
    });
chart.axis('value', {
          label: {
            offset: 1,
            formatter: function formatter(val) { // 格式化
              return val +' -';
              },
              textStyle: {
           textAlign: 'center', // 文本对齐方向，可取值为： start middle end
           fill: '#404040', // 文本的颜色
           fontSize: '12', // 文本大小
           fontWeight: 'bold', // 文本粗细
               }
                },
    });
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
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
