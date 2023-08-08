"use client"
import React from 'react'
import { Box } from '@mui/material';
import Header1 from '../Component/Header';
import MenuBar from '../Component/MenuBar';
import TakeNoteOne from '../Component/TakeNoteOne';
import TakeNoteTwo from '../Component/TakeNoteTwo';
import NotesCol from '../Component/TakeNoteThree/NotesCol';
import NotesRow from '../Component/TakeNoteThree/NotesRow';
import { getNotes } from '@/Services/DataServices';

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

  //fetch data
  const [info, setInfo] = React.useState([])
  
  const [writeNote, setwriteNote] = React.useState('Notes')

  const getData = async () => {
    let response = await getNotes()
    let arr = response.data.data.data

    if (writeNote === 'Notes') {

      let newArr = arr.filter((note) => note.isArchived === false && note.isDeleted === false)
      setInfo(newArr)

    } else if (writeNote === 'Archive') {
      let newArr = arr.filter((note) => note.isArchived === true && note.isDeleted === false)
      setInfo(newArr)
    }
    else if (writeNote === 'Trash') {
      let newArr = arr.filter((note) => note.isArchived === false && note.isDeleted === true)
      setInfo(newArr)
    }
  }
  const updatecolor = () => {
    getData()
  }

  React.useEffect(() => {
    getData()
  }, [])
  return (
    <div className='relative'>
      <Header1 handleDrawer={handleDrawer} ChangeFlex={ChangeFlex} />
      <MenuBar handleDrawer={handleDrawer} open={open} />
      <Box className='absolute top-20 right-0 flex flex-col'
        sx={{ width: open ? ['76vw'] : ['80vw'] }}
      >
       {onetwo?<TakeNoteOne openDesc={openDesc}/>:<TakeNoteTwo closeDesc={closeDesc}/>}
       {gridFlex ? <div><NotesCol info={info} updatecolor={updatecolor} /></div> : <div className='grid-container '><NotesRow info={info} updatecolor={updatecolor} /></div>}
        
      </Box>
    </div>
  )
}

export default Dashboard