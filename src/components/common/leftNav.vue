<template>
    <div class='left-nav' >
       <ul >
           <li>
               <i class='icon iconfont icon-shouyin'></i>
               <div>收银</div>
           </li>
           <li>
               <i class='icon iconfont icon-dianpu'></i>
               <div>店铺</div>
           </li>
           <li>
               <i class='icon iconfont icon-hanbao'></i>
               <div>商品</div>
           </li>
           <li>
               <i class='icon iconfont icon-huiyuan'></i>
               <div>会员</div>
           </li>
           <li>
               <i class='icon iconfont icon-shezhi'></i>
               <div>设置</div>
           </li>
           
          
       </ul>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
  .left-nav{
      color: #fff;
      font-size: 10px;
      height: 100%;
      background-color: #1d8ce0;
      float: left;
      width:5%;
  }
  .iconfont {
      font-size: 24px;
  }
  .left-nav ul{
      padding: 0px;
      margin: 0px;

  }

  .left-nav ul>li{
      list-style: none;
      text-align: center;
      padding: 10px;
      border-bottom: 1px solid  #20a0ff;
  }
</style>