import { createSlice } from "@reduxjs/toolkit"



const initialCounterState = {
    count:0,
    showCounter:true
}


const counterSlice = createSlice({
    name:'counter',
    initialState:initialCounterState,
    reducers :{
        increment(state){
            state.count+=1
        },
        decrement(state){
            state.count-=1
        },
        incrementByFive(state,action){
           state.count=state.count + action.payload
        },
        toggle(state){
            state.showCounter = !state.showCounter
        }
    }
})



export default counterSlice.reducer



export const counterActions = counterSlice.actions


