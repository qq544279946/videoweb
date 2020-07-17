import {CATAGORY_MORE} from './mutation-types'
import {catagoryGetMore} from '../api'
export default{
    state:()=>({
        titles:[
            {
                name:'题材',
                title:['全部','冒险','热血','恋爱','搞笑','少女','总裁','都市',
                '悬疑','惊奇','奇幻','玄幻','古风','治愈','正能量','运动', '校园','日常'
                    ]
            },
            {
                name:'地区',
                title:['全部','大陆','日本','其他' ]
            },
            {
                name:'进度',
                title:['全部','连载','完结','新上架'
                    ]
            },
            {
                name:'收费',
                title:['全部','免费','付费'
                    ]
            },
            {
                name:'排序',
                title:['人气推荐','更新时间','追漫人数'
                    ]
            },
        ],
        items:[
            
                {
                    name:'辉夜大小姐想让我告白 ~天才们的恋爱头脑战~',
                    catagory:['恋爱','搞笑','校园','日常'],
                    url:'http://www.baidu.com',
                    faceUrl:'/imgs/videoface.png'
                },
                {
                    name:'辉夜大小姐想让我告白 ~天才们的恋爱头脑战~',
                    catagory:['恋爱','搞笑','校园','日常'],
                    url:'http://www.baidu.com',
                    faceUrl:'/imgs/videoface.png'
                },
                {
                    name:'辉夜大小姐想让我告白 ~天才们的恋爱头脑战~',
                    catagory:['恋爱','搞笑','校园','日常'],
                    url:'http://www.baidu.com',
                    faceUrl:'/imgs/videoface.png'
                },
                {
                    name:'辉夜大小姐想让我告白 ~天才们的恋爱头脑战~',
                    catagory:['恋爱','搞笑','校园','日常'],
                    url:'http://www.baidu.com',
                    faceUrl:'/imgs/videoface.png'
                }
            ,
            
                {
                    name:'辉夜大小姐想让我告白 ~天才们的恋爱头脑战~',
                    catagory:['恋爱','搞笑','校园','日常'],
                    url:'http://www.baidu.com',
                    faceUrl:'/imgs/videoface.png'
                },
                {
                    name:'辉夜大小姐想让我告白 ~天才们的恋爱头脑战~',
                    catagory:['恋爱','搞笑','校园','日常'],
                    url:'http://www.baidu.com',
                    faceUrl:'/imgs/videoface.png'
                },
                {
                    name:'辉夜大小姐想让我告白 ~天才们的恋爱头脑战~',
                    catagory:['恋爱','搞笑','校园','日常'],
                    url:'http://www.baidu.com',
                    faceUrl:'/imgs/videoface.png'
                },
                {
                    name:'辉夜大小姐想让我告白 ~天才们的恋爱头脑战~',
                    catagory:['恋爱','搞笑','校园','日常'],
                    url:'http://www.baidu.com',
                    faceUrl:'/imgs/videoface.png'
                }
            ,
            
                {
                    name:'辉夜大小姐想让我告白 ~天才们的恋爱头脑战~',
                    catagory:['恋爱','搞笑','校园','日常'],
                    url:'http://www.baidu.com',
                    faceUrl:'/imgs/videoface.png'
                },
                {
                    name:'辉夜大小姐想让我告白 ~天才们的恋爱头脑战~',
                    catagory:['恋爱','搞笑','校园','日常'],
                    url:'http://www.baidu.com',
                    faceUrl:'/imgs/videoface.png'
                },
                {
                    name:'辉夜大小姐想让我告白 ~天才们的恋爱头脑战~',
                    catagory:['恋爱','搞笑','校园','日常'],
                    url:'http://www.baidu.com',
                    faceUrl:'/imgs/videoface.png'
                },
                {
                    name:'辉夜大小姐想让我告白 ~天才们的恋爱头脑战~',
                    catagory:['恋爱','搞笑','校园','日常'],
                    url:'http://www.baidu.com',
                    faceUrl:'/imgs/videoface.png'
                }
            ,
            
                {
                    name:'辉夜大小姐想让我告白 ~天才们的恋爱头脑战~',
                    catagory:['恋爱','搞笑','校园','日常'],
                    url:'http://www.baidu.com',
                    faceUrl:'/imgs/videoface.png'
                },
                {
                    name:'辉夜大小姐想让我告白 ~天才们的恋爱头脑战~',
                    catagory:['恋爱','搞笑','校园','日常'],
                    url:'http://www.baidu.com',
                    faceUrl:'/imgs/videoface.png'
                },
                {
                    name:'辉夜大小姐想让我告白 ~天才们的恋爱头脑战~',
                    catagory:['恋爱','搞笑','校园','日常'],
                    url:'http://www.baidu.com',
                    faceUrl:'/imgs/videoface.png'
                },
                {
                    name:'辉夜大小姐想让我告白 ~天才们的恋爱头脑战~',
                    catagory:['恋爱','搞笑','校园','日常'],
                    url:'http://www.baidu.com',
                    faceUrl:'/imgs/videoface.png'
                }
            ,
            
                {
                    name:'辉夜大小姐想让我告白 ~天才们的恋爱头脑战~',
                    catagory:['恋爱','搞笑','校园','日常'],
                    url:'http://www.baidu.com',
                    faceUrl:'/imgs/videoface.png'
                },
                {
                    name:'辉夜大小姐想让我告白 ~天才们的恋爱头脑战~',
                    catagory:['恋爱','搞笑','校园','日常'],
                    url:'http://www.baidu.com',
                    faceUrl:'/imgs/videoface.png'
                },
                {
                    name:'辉夜大小姐想让我告白 ~天才们的恋爱头脑战~',
                    catagory:['恋爱','搞笑','校园','日常'],
                    url:'http://www.baidu.com',
                    faceUrl:'/imgs/videoface.png'
                },
                {
                    name:'辉夜大小姐想让我告白 ~天才们的恋爱头脑战~',
                    catagory:['恋爱','搞笑','校园','日常'],
                    url:'http://www.baidu.com',
                    faceUrl:'/imgs/videoface.png'
                }
            
        ],
    }),
    actions:{
        async catagoryMore({commit},page){
            console.log(111)
            //axios
            try{
                const more = await catagoryGetMore(page)
                commit(CATAGORY_MORE,more.data)
            }catch(e){
                alert(e)
            }
            
           
            
        }
    },
    mutations:{
        [CATAGORY_MORE](state,more){
            var newItems = state.items.concat(more);
            state.items = newItems;
        }
    }
}