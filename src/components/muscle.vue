<template>
   <div @click="fontchange">
    <ul>
    <li class="box">
        <span class="font" style="font-weight:bold;margin-top:20px;margin-left:10px">接入数据源</span>
     <ul style="overflow:hidden;margin-left:-5px;margin-top:20px">
        <li class="left">
            <div style="text-align:center" class="icon"> <OfficeBuilding style="width: 1em; height: 1em;" /></div>
            <div style="font-weight:bold;font-size:32px;text-align:center" class="font">40</div>
        </li>
        <li class="right">
            <div style="text-align:center" class="icon"><Document style="width: 1em; height: 1em;" /></div>
            <div style="font-weight:bold;font-size:32px;text-align:center" class="font">516</div>
        </li>
     </ul>
     <div>
      <ul>
        <li style="float:left;margin-left:45px;margin-top:20px" class="font">接入系统数</li>
        <li style="float:right;margin-right:75px;;margin-top:20px" class="font">接入表数量</li>
     </ul>
     </div>
    </li>
    </ul>
</div>
</template>
<script>
import IconDocumentation from './icons/IconDocumentation.vue';
export default {
  components: { IconDocumentation },
    methods:{
        fontchange:function(){
                var box =document.getElementsByClassName('box')[0];
                 box.classList.toggle('boxchange')
                 var icon = document.getElementsByClassName('icon')
                  for(let i=0;i<2;i++){
                    icon[i].classList.toggle('iconchange')
                  }
                   var sideBar = document.getElementsByClassName('font');
                  for(let i=0;i<5;i++){
                    sideBar[i].classList.toggle('fontchange')
                  }
                },
    }
}
</script>
<style scoped>
.box{
    width: 400px;
    height: 200px;
    background-color:#fff;
    box-shadow: 0px 2px 3px rgb(21, 14, 14);
}
 .boxchange{
    background-color: rgb(81, 51, 251);

}
.left{
    width: 165px;
    height: 70px;
    display: inline-block;
    border-right: 1px rgb(131, 120, 120) solid;
}
.right{
    width: 165px;
    height: 70px;
    display: inline-block;
}
li{
    list-style: none;
}
.fontchange{
    color: #fff;
}
.icon{
    font-size: 20px;
    color: rgb(95, 118, 249);
}
.iconchange{
     font-size: 20px;
     color:#fff;
}
.clearfix:after,.clearfix:before{
		content: '';
		display: table;
	}
	.clearfix:after{
		clear: both;
	}
	.clearfix{
		/* 为 IE6、IE7浏览器设置的清除浮动 */
		*zoom: 1;
	}
</style>