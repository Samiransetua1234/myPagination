import {createSlice} from '@reduxjs/toolkit'

const userData = createSlice({
    name:'Users',
    initialState:{
        users:[]
    },
    reducers:{
        create_user:(state, actions)=>{
           const {id, email, password} = actions.payload
           state.users.push({
            id,
            email,
            password
           }) 
        }
    }
})