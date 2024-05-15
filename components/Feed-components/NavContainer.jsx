"use client"
import React from 'react'
import Navbar from './Navbar'
import Polls from '../poll/Polls'
import { tabsStore } from '@/store/tabState';


const NavContainer = () => {
  const tab = tabsStore((state) => state.tab);
  return (
    <div>
    <Navbar/>
    <div className="grid grid-cols-[1fr,350px] px-14 py-8 main h-[calc(100vh-90px)] gap-14 overflow-scroll">
    {tab === "Home" && <Polls/>}
    </div>
  </div>
  )
}

export default NavContainer