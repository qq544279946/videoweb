import ajax from './ajax'


export const catagoryGetMore = (page)=>{
    return  ajax.get(`/more`)
}

