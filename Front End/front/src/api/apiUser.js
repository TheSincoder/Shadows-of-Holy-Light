import apiClientNoAuth from './clientNoAuth'
import apiClientTokenAuth from './clientTokenAuth'


const endpoint = '/register'


export const postUser = async(username,firstName,lastName,email,password, cancelToken)=>{
    const response = await apiClientNoAuth(cancelToken).post(endpoint,{username:username,first_name:firstName,last_name:lastName,email:email,password:password});
    return response.ok
}


export const putUser = async(token, data, cancelToken)=>{
    const response = await apiClientTokenAuth(token).put(endpoint,data);
    return response.ok
}