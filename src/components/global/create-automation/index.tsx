"use client"
import { Button } from '@/components/ui/button'
import React, { useMemo } from 'react'
import Loader from '../loader/loader'
import { AutomationDuoToneBlue, AutomationDuoToneWhite } from '@/icons'
import { useCreateAutomations } from '@/hooks/use-automations'
import { v4 } from 'uuid'

type Props = {}

const CreateAutomation = (props: Props) => {
  const mutationId = useMemo(()=>v4(), [])
 const {isPending, mutate} = useCreateAutomations(mutationId) 
 


  return (
   <Button onClick={()=>mutate({name: "Untitiled", id: mutationId, createdAt: new Date()})} className='lg:px-10 py-6 bg-gradient-to-br hover:opacity-80 text-white rounded-full from-[#3352CC] font-medium to-[#1C2D70]'>
    <Loader state={isPending} className=''>
    <p className='lg:inline hidden'>Create An Automation</p>
    </Loader>
   </Button>
  )
}

export default CreateAutomation