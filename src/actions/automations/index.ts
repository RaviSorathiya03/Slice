"use server"

import { currentUsers } from "../user"
import { createAutomation, getAutomations } from "./queries";

export const createAutomations = async(id?:string)=>{
    const user = await currentUsers();
    try {
        const create = await createAutomation(user?.id!, id)
        if(create) return {status: 200, data: create}
        return {
            status: 404,
            data: "Not Found"
        }
    } catch (error) {
        console.log(error)
        return{
            status: 500,
            data: "something went wrong"
        }
    }
}

export const getAllAutomations = async()=>{
    const user = await currentUsers();
    try {
        const automations = await getAutomations(user?.id!);
        console.log("index automations", automations)
        if(automations) return {status: 200, data: automations || []}
        return {status: 404, data: []}
    } catch (error) {
        console.log(error);
        return {
            status: 500,
            data: []
        }
    }
}