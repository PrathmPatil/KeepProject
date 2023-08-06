"use client"
import React from 'react'
import { Box } from '@mui/material';
import Header1 from '../Component/Header';
import MenuBar from '../Component/MenuBar';
import TakeNoteOne from '../Component/TakeNoteOne';
import TakeNoteTwo from '../Component/TakeNoteTwo';

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
    // change TakeNoteOne to TakeNoteTwo
  const[onetwo, setonetwo]=React.useState(true)
  const openDesc=()=>{
    setonetwo(!onetwo)
  }
  const closeDesc=()=>{
    setonetwo(!onetwo)
  }
  return (
    <div className='relative'>
      <Header1 handleDrawer={handleDrawer} ChangeFlex={ChangeFlex} />
      <MenuBar handleDrawer={handleDrawer} open={open} />
      <Box className='absolute top-20 right-0 flex flex-col'
        sx={{ width: open ? ['76vw'] : ['83vw'] }}
      >
       {onetwo?<TakeNoteOne openDesc={openDesc}/>:<TakeNoteTwo closeDesc={closeDesc}/>} 
        
      </Box>
    </div>
  )
}

export default Dashboard