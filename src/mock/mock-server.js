import Mock from 'mockjs'
import data from './data.json'

Mock.mock('/more','get',()=>{
    return Mock.mock({code:0,data:data.more})
})

console.log('server......')