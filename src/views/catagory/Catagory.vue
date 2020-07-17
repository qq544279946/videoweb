<template>
    
    <div class="contents">
         <div class="title">
             
             <div v-for="(tip,index) in titles" :key="index">
                 <span class="tip">{{tip.name}}</span>
                 <ul>
                     <li v-for="(name,index2) in tip.title" :key="index2" :class="index2===select[index]?'active':''" @click="choose(index,index2)">{{name}}</li>
                     
                 </ul>
             </div>
            
            
         </div>
         <div class="list">
             <div class="items">
                 <Item v-for="(item,index) in items" :key="index" :item="item" class="item"></Item>
             </div>
             
         </div>
         <div v-show="isLoading" class="loading">
            加载中...
        </div>
    </div>
</template>

<script>
import Item from '../../components/item/Item'
import {mapState} from 'vuex'
export default {
    data:()=>{
        return{
            isLoading:false,
            page:1,
            isLoading:false,
            select:[]
        }
    },
    methods:{
        scrollBottom(){
           
            if((document.documentElement.clientHeight + document.documentElement.scrollTop) >= (document.body.scrollHeight)){
                this.page++;
                this.isLoading = true
                this.$store.dispatch('catagoryMore',this.page);
            }
        },
        choose(row,col){
            this.select.splice(row,1,col)
        }
    },
    computed:{
        ...mapState({
            items:state=>state.catagory.items,
            titles:state=>state.catagory.titles
        })
    },
    watch:{
        items(){
            this.isLoading = false;
        }
    },
    mounted(){
        this.select =this.titles.reduce((pre,cur)=>{pre.push(0);return pre},[]);
        window.addEventListener('scroll',this.scrollBottom);
    },
    components:{
        Item
    }
}
</script>

<style lang="less" scoped>
.contents{
    width: 1280px;
    margin: 0 auto;
    
    .title{
        display: flex;
        flex-direction: column;
        
        div{
            
            display: flex;
            // background: green;
            margin-bottom: 20px;
            &:first-child{
                margin-top: 20px;
            }
            .tip{
                margin-right: 18px;
                font-size: 16px;
                color: rgba(0, 0, 0, 0.34);
            }
            ul{
                display: flex;
                li{
                    cursor: pointer;
                    margin-right: 24px;
                    font-size: 18px;
                }
            }
        }
    }
    .list{
        
        .items{
            display: flex;
            flex-wrap: wrap;
           .item{
                margin: 0 40px 40px 0;
                &:nth-child(4n){
                    margin-right: 0px;
                }
           }
        }
    }
    .loading{
        margin-bottom: 20px;
        text-align: center;
        font-size: 20px;
    }
    .active{
        color: brown;
    }
}

</style>