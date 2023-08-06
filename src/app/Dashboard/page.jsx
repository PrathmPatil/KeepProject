"use client"
import React from 'react'
import Header1 from '../Component/Header';
import MenuBar from '../Component/MenuBar';

function Dashboard() {
    // open side bar
  const [open, setOpen] = React.useState(false);
  const handleDrawer = () => {
    setOpen(!open);
  };
    // change notes grid to col 
  const [gridFlex, setgridFlex] = React.useState(true)
  const ChangeFlex = () => {
    setgridFlex(!gridFlex)
  }


  return (
    <div className='relative'>
      <Header1 handleDrawer={handleDrawer} ChangeFlex={ChangeFlex} />
      <MenuBar handleDrawer={handleDrawer} open={open} />
    </div>
  )
}

export default Dashboard