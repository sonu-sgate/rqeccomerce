import { bookingfail, bookingreq, bookingsucc } from "./ActionTypes"
import axios from "axios"
export const bookingrequest=()=>{
    return {type:bookingreq}
}
export const bookingsucccess=()=>{
    return {type:bookingsucc}
}
export const bookingfailure=()=>{
    return {type:bookingfail}
}

export const userbooking=(obj)=>(dispatch)=>{
    return axios.post('',obj)
}