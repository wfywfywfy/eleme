<style scoped lang="less" src="./my.less"></style>
<template>
    <div class="dianCan">
      
        <div class="rexiao flexbox">

            <div class="l-rexiao">
                <!-- <scroll
                ref="scroll"
                :scrollY:"true"> -->
               <scrollY ref="scrollY1">
                <ul>
                     <li 
                     class="menu-item"
                     :class="{current:isCurrent===index?'true':''}"
                     v-for="(item,index) in mentList"
                     @click="selectMenu(item,index)">
                     <div class="mimgCon"
                     :class="goodsTypeCssList[item.type]"
                      v-if="item.type>-1"></div>
                       <span>{{item.name}}</span> 
                       <p>{{item.name1}} </p>            
                    </li>
                </ul>
                 <!-- </scroll> -->
                </scrollY>
            </div>
            <div class="r-rexiao">
                <scrollY ref="scrollY2">
                     <!-- <scroll ref="scroll1"
                     :scrollY:"true"
                     > -->
                <div class="r-rexiao1">
                    <h1 class="ellipsis">{{goodslistTitle}}</h1>
                </div>
                <div class="r-rexiao2-con clear"
                v-for="(item,index) in goodsList"
                >
                    <div class="r-rexiao2 fl">
                        <span class="r-rexiao2a">招牌</span>
                        <img
                            :src="item.image">
                    </div>
                    <div class="r-rexiao3 fl">
                        <h1 class="ellipsis">{{item.name}}</h1>
                        <!-- <p >{{item.info}}</p> -->
                        <p>月售{{item.sellCount}}份,好评率{{item.rating}}%</p>
                        <h2>￥{{item.price}}<span>起</span><i class="iconfont icon-jiahao"
                        @click="addShopCart(item)"
                        ></i></h2>
                    </div>

                </div>
                 <!-- </scroll> -->
           </scrollY>
            </div>

        </div>
    

    </div>
</template>
<script src="./my.js"></script>