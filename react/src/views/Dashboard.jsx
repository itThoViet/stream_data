// import React from 'react'
import Header from '../components/header'
import FloatingButton from '../components/core/floatingButton'
function Dashboard() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  return (
    <>
      <Header/>
      <FloatingButton/>
      dashboard
    </>
  )
}

export default Dashboard
