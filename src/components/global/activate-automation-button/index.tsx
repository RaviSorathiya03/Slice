import { Button } from '@/components/ui/button'
import React from 'react'
import Loader from '../loader/loader'
import { ActiveAutomation } from '@/icons/active-automation'

type Props = {}

const ActivateAutomationButton = (props: Props) => {
  return <Button className='lg:px-10 bg-gradient-to-br hover:opacity:80 text-white rounded-full from-[#3352cc] font-medium to-[#1c2d70]'>
    <Loader state={false} className=''>
        <ActiveAutomation />
        <p className='lg:inline hidden'>
            Activate Automation
        </p>
    </Loader>
  </Button>
}

export default ActivateAutomationButton