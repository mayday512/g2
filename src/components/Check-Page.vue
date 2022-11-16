<template>
<div class="bigbox">
     <ArrowLeft class="arrowleft" @click="arrowClick('left')"/>
     <ArrowRight class="arrowright" @click="arrowClick('right')"/>
<!-- <button @click="arrowClick('right')">左</button> -->
<!-- <button>右</button> -->
  <el-carousel indicator-position="none" autoplay="false" class="car"  ref="cardShow" arrow="never">
    <el-carousel-item v-for="item in 4" :key="item">
      <ul class="menu">
        <li class="innercard" v-for="item in 5">
            <div class="circle">LP</div>
            <div class="text">
                <h2>40</h2>
                <span class="innertext">Leads pipeline</span>
            </div>
            </li>
      </ul>
       <ul class="menu">
        <li class="innercard" v-for="item in 5">
            <div class="circle">LP</div>
            <div class="text">
                <h2>40</h2>
                <span class="innertext">Leads pipeline</span>
            </div>
            </li>
      </ul>
       <ul class="menu">
        <li class="innercard" v-for="item in 5">
            <div class="circle">LP</div>
            <div class="text">
                <h2>40</h2>
                <span class="innertext">Leads pipeline</span>
            </div>
            </li>
      </ul>
    </el-carousel-item>
  </el-carousel>
</div>
</template>
<script>
export default {
    data() {
    return {

    }
  },

      methods: {
    arrowClick(val) {
      if (val === 'right') {
        this.$refs.cardShow.next()
      } else {
        this.$refs.cardShow.prev()
      }
    }
  },
}
</script>
<style scoped>
.el-carousel__item h3 {
  display: flex;
  color: #475669;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}
.text{
    float:right;
    margin-right:30px;
    margin-top: 15px;
}
.bigbox{
    width: 1300px;
    position: relative;
    background-color: #475669;
}
.arrowleft{
    width: 2em;
    height: 2em;
    position: absolute;
    top: 50%;
    left: 5%;
    background-color: rgb(223, 41, 41);
}
.arrowright{
    width: 2em;
    height: 2em;
    position: absolute;
    top: 50%;
    right: 5%;
    background-color: rgb(243, 27, 27);
}
.innertext{
    font-size: 10px;
    text-align: center;
}
.menu{
    display: flex;
    align-items: center;
}
.circle{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #fff;
    text-align: center;
    line-height: 50px;
    position:absolute;
	top:20%;
    left: 5%;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.car{
    width: 1000px;
    margin: 10px auto;
}
.el-carousel__arrow{
    background-color: rgb(203, 22, 22);
}
.innercard{
    width: 180px;
    height: 90px;
    background-color: rgb(195, 57, 57);
    position:relative;
    margin-top: 10px;
    margin-right: 10px;
}
li{
    list-style: none;
}
</style>