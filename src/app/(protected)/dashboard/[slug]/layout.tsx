import Navbar from '@/components/global/navbar'
import Sidebar from '@/components/global/sidebar'
import React from 'react'
import {dehydrate, HydrationBoundary, QueryClient} from '@tanstack/react-query'
import { prefetchAutomation, prefetchUserProfile } from '@/react-query/prefetch'

type Props = {
    children: React.ReactNode
    params: {slug: string}
}

const Layout = async({children, params}: Props) => {

  const query = new QueryClient();
   await prefetchUserProfile(query);
   await prefetchAutomation(query); 

  return (
    <HydrationBoundary state={dehydrate(query)}>
    <div className='p-3 '>
      <Sidebar slug={params.slug} />
      <div className='lg:ml-[250px] lg:py-5 lg: pl-10 flex flex-col overflow-auto'>
        <Navbar slug={params.slug}/>
        {children}
      </div>
    </div>
    </HydrationBoundary>
  )
}

export default Layout