import InvestorsPage from '@/components/investor'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import React from 'react'

const page = () => {
  return (
    <><SiteHeader />
    <InvestorsPage/>
    
    <SiteFooter /></>
    
  )
}

export default page
