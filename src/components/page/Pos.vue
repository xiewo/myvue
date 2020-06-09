<template>
  <div class="pos">
    <el-row>
     <el-col :span="7" class='pos-order' id='order-list'>
       <el-tabs>
         <el-tab-pane label='点餐' >
           <el-table :data='tableData' border style="width:100%" >
             <el-table-column prop='goodsName' label='商品名称'></el-table-column>
             <el-table-column prop='count' label='数量' width='50'></el-table-column>
             <el-table-column prop='price' label='价格' width='70'></el-table-column>
             <el-table-column  label='操作' width='100' fixed='right'>
               <template slot-scope="scope">
                <el-button type='text' size='small'  @click="delSingleGoods(scope.row)">删除</el-button>
                <el-button type='text' size='small' @click="addOrderList(scope.row)">添加</el-button>
               </template>
             </el-table-column>
           </el-table>
           <div class='totalDiv'>
             <span>数量：{{totalCount}}</span> 
             <span>金额：{{totalMoney}}</span> 
           </div>
           <div class='orader-price'>
             <el-button type='warning' @click='hitchGoods'>挂单</el-button>
             <el-button type='danger' @click="delAllGoods">删除</el-button>
             <el-button type='success' @click="checkOut" >结算</el-button>
           </div>
         </el-tab-pane>

         <el-tab-pane label='挂单'>
            <el-table :data='hitchData'  border style="width:100%" >
              <el-table-column prop='goodsName' label='商品名称'></el-table-column>
              <el-table-column prop='count' label='数量' width='50'></el-table-column>
              <el-table-column prop='price' label='价格' width='70'></el-table-column>
              <el-table-column  label='操作' width='100' fixed='right'>
                <template slot-scope="scope">
                <el-button type='text' size='small'  @click="delSingleGoods(scope.row)">删除</el-button>
                <el-button type='text' size='small'  @click="addOrderCount(scope.row)">添加</el-button>
               </template>
              </el-table-column>
            </el-table>
               <div class='totalDiv'>
             <span>数量：{{hitchCount}}</span> 
             <span>金额：{{hitchMoney}}</span> 
           </div>
           <div class='orader-price'>
             <el-button type='danger' @click="delHitchData">删除</el-button>
             <el-button type='success' @click="getGoBackMoney" >去结算</el-button>
           </div>
         </el-tab-pane>

         <el-tab-pane label='外卖'>

         </el-tab-pane>
       </el-tabs>
       </el-col>
       <el-col :span='17'>
         <div class='often-goods'> 
            <div class='title'>常用商品</div>
            <div class='often-goods-list'>
              <ul>
                <li v-for='goods in oftenGoods' :key='goods.id' @click="addOrderList(goods)">
                  <span>{{goods.goodsName}}</span>
                  <span class='o-price'>￥{{goods.price}}元</span>
                </li>
              </ul>
            </div>
          </div>
          <div class='goods-type'>
             <el-tabs  >
               <el-tab-pane label='汉堡'>
                  <div>
                    <ul class='cookList'>
                      <li v-for='goods in type0Goods' :key='goods.goodsId' @click='addOrderList(goods)' >
                        <span class='foodImg'> 
                          <img  :src="goods.goodsImg" width='100%'>
                        </span>
                        <span class="foodName">{{goods.goodsName}}</span>
                        <span class="foodPrice">￥{{goods.price}}元</span>
                      </li>
                    </ul>
                  </div>
               </el-tab-pane>
               <el-tab-pane label='小吃'>
                     <div>
                    <ul class='cookList'>
                      <li v-for='goods in type1Goods' :key='goods.goodsId' @click='addOrderList(goods)'>
                        <span class='foodImg'> 
                          <img  :src="goods.goodsImg" width='100%'>
                        </span>
                        <span class="foodName">{{goods.goodsName}}</span>
                        <span class="foodPrice">￥{{goods.price}}元</span>
                      </li>
                    </ul>
                  </div>
               </el-tab-pane>
               <el-tab-pane label='饮料'>
                   <div>
                    <ul class='cookList'>
                      <li v-for='goods in type2Goods' :key='goods.goodsId' @click='addOrderList(goods)'>
                        <span class='foodImg'> 
                          <img  :src="goods.goodsImg" width='100%'>
                        </span>
                        <span class="foodName">{{goods.goodsName}}</span>
                        <span class="foodPrice">￥{{goods.price}}元</span>
                      </li>
                    </ul>
                  </div>
               </el-tab-pane>
               <el-tab-pane label='套餐'>
                     <div>
                    <ul class='cookList'>
                      <li v-for='goods in type3Goods' :key='goods.goodsId' @click='addOrderList(goods)'>
                        <span class='foodImg'> 
                          <img  :src="goods.goodsImg" width='100%'>
                        </span>
                        <span class="foodName">{{goods.goodsName}}</span>
                        <span class="foodPrice">￥{{goods.price}}元</span>
                      </li>
                    </ul>
                  </div>
               </el-tab-pane>
             </el-tabs>
               
          </div>
         
       </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Pos',
  data(){
    return{
      tableData:[],
      oftenGoods:[
        {
              goodsId:1,
              goodsName:'香辣鸡腿堡',
              price:18
          }, {
              goodsId:2,
              goodsName:'田园鸡腿堡',
              price:15
          }, {
              goodsId:3,
              goodsName:'和风汉堡',
              price:15
          }, {
              goodsId:4,
              goodsName:'快乐全家桶',
              price:80
          }, {
              goodsId:5,
              goodsName:'脆皮炸鸡腿',
              price:10
          }, {
              goodsId:6,
              goodsName:'魔法鸡块',
              price:20
          }, {
              goodsId:7,
              goodsName:'可乐大杯',
              price:10
          }, {
              goodsId:8,
              goodsName:'雪顶咖啡',
              price:18
          }, {
              goodsId:9,
              goodsName:'大块鸡米花',
              price:15
          }, {
              goodsId:20,
              goodsName:'香脆鸡柳',
              price:17
          }
      ],
      type0Goods:[
        {
              goodsId:1,
              goodsImg:"",
              goodsName:'香辣鸡腿堡',
              price:18
          }, {
              goodsId:2,
              goodsImg:"",
              goodsName:'田园鸡腿堡',
              price:15
          },
      ],
      type1Goods:[
        {
              goodsId:3,
              goodsImg:"",
              goodsName:'和风汉堡',
              price:15
          }, {
              goodsId:4,
               goodsImg:"",
              goodsName:'快乐全家桶',
              price:80
          },
      ],
      type2Goods:[
        {
              goodsId:5,
               goodsImg:"",
              goodsName:'脆皮炸鸡腿',
              price:10
          }, {
              goodsId:6,
               goodsImg:"",
              goodsName:'魔法鸡块',
              price:20
          },
      ],
      type3Goods:[
        {
              goodsId:8,
               goodsImg:"",
              goodsName:'雪顶咖啡',
              price:18
          }, {
              goodsId:9,
               goodsImg:"",
              goodsName:'大块鸡米花',
              price:15
          },
      ],
      totalMoney:0,
      totalCount:0,
      hitchMoney:0,
      hitchCount:0,
      hitchData:[]
    }
  },
created(){
  // axios.get()
  // .then(res)
  // .catch();

  // axios.get()
  // .then()
  // .catch();
},
 mounted(){
   let orderHeiht = document.body.clientHeight;
  //  console.log(orderHeiht);
   document.getElementById('order-list').style.height = orderHeiht+ 'px'
 },

//数据更新阶段来调用
 updated(){
   this.getAllMoney();
 },

 methods:{
   // 给tabelData赋值 显示
   addOrderList(goods){

     this.totalMoney = 0;
     this.totalCount = 0;

     let isHave = false;
    //  判断是否有值
     for(let i=0;i<this.tableData.length;i++){
       if(this.tableData[i].goodsId == goods.goodsId){
         isHave = true;
       }
     }
     //如果为真  逻辑判断数量加减 总价的计算 数据的渲染
     if(isHave){
      let arr = this.tableData.filter(o=>o.goodsId == goods.goodsId);
       arr[0].count++;
     }else{
       let newGoods = {goodsId:goods.goodsId,
                       goodsName: goods.goodsName,
                       price: goods.price,
                       count:1,
                      };
        this.tableData.push(newGoods);              
     }

    // 调用总价方法
     this.getAllMoney();
   },
  // 删除当前行的数据
   delSingleGoods(goods){
     this.tableData = this.tableData.filter(o=>o.goodsId != goods.goodsId);
     this.hitchData = this.hitchData.filter(o=>o.goodsId != goods.goodsId);
     this.getAllMoney();
   },
   //重新计算商品数量和总价
   
  //  删除所有数据
   delAllGoods(){
        this.totalMoney = 0 ;
        this.totalCount = 0;
        this.tableData = [];  
   },

  // 这里要向后台发送post请求 这样才会记录
   checkOut(){
      let temer = null
    //  axios.post().then.catch()
    if(this.totalCount != 0){
        this.totalMoney = 0 ;
        this.totalCount = 0;
        this.tableData = [];
        this.$message({
          message:'结算成功,谢谢您的惠顾！',
          type: 'success'
        })
    }else{
        if(temer==null){
          this.temer = setTimeout(()=>{
             this.$message.error('没有下单，不可以结算！');
             clearTimeout(temer);
          },1000)
        }
       
    }
   },


// 挂单处理
 hitchGoods(){
    if(this.tableData.length != ''){
      this.hitchData = this.tableData.map(val=>val);
      this.delAllGoods();
      this.getAllMoney();
    }
  },
 // 在挂单里面增加数量count
 addOrderCount(goods){
    let arr = this.hitchData.filter(o=>o.goodsId == goods.goodsId);
    arr[0].count++;
    this.getAllMoney();
 },

 delHitchData(){
    this.hitchMoney = 0;
     this.hitchCount = 0;
     this.hitchData = [];
 },
 
 getGoBackMoney(){
   this.tableData = this.hitchData.map(val=>val);
   this.delHitchData();
 }



 },
 computed:{
    getAllMoney(){
     this.totalMoney = 0;
     this.totalCount = 0 ;
     this.hitchMoney = 0;
     this.hitchCount = 0;
     if(this.tableData){
        this.tableData.forEach(elem=>{
          this.totalCount += elem.count;
          this.totalMoney = this.totalMoney + (elem.price*elem.count)
        })
     }
     if(this.hitchData){
        this.hitchData.forEach(elem=>{
          this.hitchCount += elem.count;
          this.hitchMoney = this.hitchMoney + (elem.price*elem.count)
        })
     }
   },
 },
 watch:{
   
 },
  props: {
  
  }
}
</script>

<style >

.pos-order{
  background-color: #f9fafc;
  border-right: 1px solid #c0ccda;
  height: 100%;
 
}

.orader-price{
  margin-top: 20px;
}
.title{
  height: 20px;
  border-bottom: 1px solid #d3dce6;
  background-color: #f9fafc;
  padding: 10px;
  text-align: left;
}
.often-goods-list>ul>li{
  list-style: none;
  float: left;
  border: 1px solid #f9fafc;
  margin: 10px;
  background-color: #fff;
}

.o-price{
  color: blue;
}
.goods-type{
  clear: both;
}
.cookList li{
  list-style: none;
  width: 23%;
  border: 1px solie #e5e9f2;
  height: auto;
  overflow: hidden;
  background-color: #fff;
  padding: 2px;
  float: left;
  margin: 2px;
  cursor: pointer;
}
.cookList li span {
  display: block;
  float: left;

}

.foodImg{
  width: 40%;
}

.foodName{
  font-size: 18px;
  padding-left: 10px;
  color: brown;
}

.foodPrice{
  font-size: 16px;
  padding-left: 10px;
  padding-top: 10px;
}


.totalDiv{
  background-color: #fff;
  padding: 10px;
  border-bottom: 1px solid #ccc;
}
.totalDiv span:last-child{
  padding-left: 20px;
}
</style>
