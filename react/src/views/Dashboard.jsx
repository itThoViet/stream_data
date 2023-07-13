// import React from 'react'
import Header from '../components/guest/header'
import FloatingButton from '../components/core/floatingButton'
import { Outlet } from 'react-router-dom'
function Dashboard() {
  return (
    <>
      <Header />
      <div className='mx-5'>
        <Outlet />
      </div>
      <div className='fixed bottom-2 right-2'>
        <FloatingButton />
      </div>
    </>
  )
}

export default Dashboard
