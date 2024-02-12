import {jwtDecode} from 'jwt-decode'

export const getDecodeToken =(token)=>{
    try{
        console.log(token,'bshdbhsbdhsbhd')
       return jwtDecode(token)
       
    }catch(e)
    {
        console.log('Error decoding token',e)
    }
}
