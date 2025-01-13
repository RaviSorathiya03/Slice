"use server"

import { client } from "@/lib/prisma"

export const updateItegrations = (token:string, expire: Date, id:string)=>{
    return client.integrations.update({
        where:{
            id:id
        }, data:{
            token, 
            expiresAt: expire
        }
    })
}