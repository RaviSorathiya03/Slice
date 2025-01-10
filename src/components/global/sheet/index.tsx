import React from 'react'
import {
    Sheet as ShadecnSheet,
    SheetContent,
    SheetTrigger

} from '@/components/ui/sheet'

type Props = {
    trigger: React.ReactNode,
    children: React.ReactNode,
    className?: string,
    side : "left" | "right"
}

const Sheet = ({trigger, children, className, side}: Props) => {
  return (
   <ShadecnSheet>
    <SheetTrigger className={className}>{trigger}</SheetTrigger>
    <SheetContent className='p-0' side={side}>{children}</SheetContent>
   </ShadecnSheet>
  )
}

export default Sheet