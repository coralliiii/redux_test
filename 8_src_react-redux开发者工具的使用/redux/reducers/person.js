import {ADD_PERSON} from '../constant'

// 初始化人的列表
const initState = [{id:'001',name:'Herry',age:'18'}]
export default function personReducer(preState=initState,action){
    console.log('personReducer@@@')
    const {type,data} = action
    switch (type){
        case ADD_PERSON://若是添加一个人
            // preState.unshift(data) 不可这么写 
            return [data,...preState]
        default:
            return preState
    }
}