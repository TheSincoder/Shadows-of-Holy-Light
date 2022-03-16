import apiClientTokenAuth from './clientTokenAuth'


const endpoint = '/create-character'


export const postUser = async(name, race, char_class, strength, dexterity, constitution, intelligence, wisdom, charisma, canceltoken)=>{
    const response = await apiClientTokenAuth(token).post(endpoint,{name:name, race:race, char_class:char_class, 
        strength:strength, dexterity:dexterity, constitution:constitution, intelligence:intelligence, wisdom:wisdom, charisma:charisma});
    return response.ok
}