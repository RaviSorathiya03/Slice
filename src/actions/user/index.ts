"use server"

import { currentUser } from "@clerk/nextjs/server"
import { redirect } from "next/navigation";
import { createUser, findUser } from "./queries";
import {refreshToken} from '@/lib/fetch'
import { updateItegrations } from "../itegrations/query";

export const currentUsers = async ()=>{
    const user = await currentUser();
    if(!user) return redirect('/sign-in');
    return user;

}

export const onBoardUser = async()=>{
    const user = await currentUser();
    try {
        const found = await findUser(user?.id!)
        if(found){
            if(found.integrations.length>0){
                const today = new Date();
                const timeLeft = found.integrations[0].expiresAt?.getTime! - today.getTime
                const days = Math.round(timeLeft/(1000*3600*24))
                if(days<5){
                    console.log('refresh');
                    const refresh = await refreshToken(found.integrations[0].token)
                    const today = new Date();
                    const expire_data = today.setDate(today.getDate() + 60);
                    const update_token = await updateItegrations(refresh.access_token, new Date(expire_data), found.integrations[0].id)
                    if(!update_token){
                        console.log('update token failed');
                    }
                }
                
            }
            return {
                status: 200,
                data:{
                    firstname: found.firstname,
                    lastname: found.lastname
                }
            }
             
        }
        const created = await createUser(user?.id!, user?.firstName!, user?.lastName!, user?.emailAddresses[0].emailAddress!)
        return{
            status: 201,
            data: created
        }
        
    } catch (error) {
        console.error(error);
        return {
            status: 500,
            error: 'Internal Server Error'
        }
    }
}

export const onUserInfo = async()=>{
    const user = await currentUser();
    try {
        const profile = await findUser(user?.id!)
        if (profile) return {status:200, data:profile};
        return {status: 404}
    } catch (error) {
        return {
            status: 500,
            data: "Something went wrong"
        }
    }
}