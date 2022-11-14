<template>
   <div>
    <ul>
    <li class="box" @click="fontchange(index)" v-for="(item,index) in scriptList">
        <span class="font" style="font-weight:bold;margin-top:20px;margin-left:10px">{{scriptList[index].title}}</span>
     <ul style="overflow:hidden;margin-left:-5px;margin-top:20px">
        <li class="left" v-for="(item,index2) in innercard">
            <div style="text-align:center" class="icon"> <OfficeBuilding style="width: 1em; height: 1em;" /></div>
            <div style="font-weight:bold;font-size:32px;text-align:center" class="font">{{innercard[index2].num}}</div>
            <div class="font" style="margin-left:45px;margin-top:15px">{{innercard[index2].info}}</div>
        </li>
        <!-- <li class="right">
            <div style="text-align:center" class="icon"><Document style="width: 1em; height: 1em;" /></div>
            <div style="font-weight:bold;font-size:32px;text-align:center" class="font">516</div>
        </li> -->
     </ul>
     <div>
      <!-- <ul>
        <li style="float:left;margin-left:45px;margin-top:20px" class="font">接入系统数</li>
        <li style="float:right;margin-right:75px;;margin-top:20px" class="font">接入表数量</li>
     </ul> -->
     </div>
    </li>
    </ul>
</div>
</template>
<script>
import IconDocumentation from './icons/IconDocumentation.vue';
import { ref, onMounted } from 'vue'
export default {
  components: { IconDocumentation },
    data(){
        return{
         scriptList:[
            {
            title:'接入数据源',
         },
         {
            title:'数据资产',
         },{
            title:'数据应用',

         }
         ],
         innercard:[
            {
                icon:'',
                info:'接入系统数',
                num:'40',
                bottem:'',
            },
            {
                icon:'',
                info:'接入表数量',
                num:516,
                bottem:'',
            },
            
         ]
        }
    },
     onMounted:function(){
            this.$options.methods.fontchange()
        },
    methods:{
        fontchange:function(index){
                console.log(index);
                var box =document.getElementsByClassName('box')[index];
                     box.classList.toggle('boxchange')
                 var icon = document.getElementsByClassName('box')[index].getElementsByClassName('icon')
                  for(let i=0;i<icon.length;i++){
                    icon[i].classList.toggle('iconchange')
                  }
                   var sideBar = document.getElementsByClassName('box')[index].getElementsByClassName('font');
                  for(let i=0;i<sideBar.length;i++){
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
    background-color:#4385e5;

}
.left{
    width: 165px;
    height: 70px;
    display: inline-block;
}
.left:first-of-type{
       border-right: 1px solid #333437;
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