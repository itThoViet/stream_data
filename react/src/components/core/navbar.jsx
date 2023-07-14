// import React from 'react'
import {
  Typography,
} from "@material-tailwind/react";
import { NavLink } from "react-router-dom";
function NavbarGuest() {
  const navLinkStyle = ({isActive})=>{
    return{
      fontWeight: isActive ? 'bold': 'normal',
      color: isActive? 'white': 'black',
      backgroundColor: isActive ? 'green':'white',

  }
}
  return (
    <ul className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <NavLink style={{navLinkStyle}} to='/' className="flex items-center" >
          Trang Chủ
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <NavLink style={{navLinkStyle}} to='/thong-tin-tho' className="flex items-center" >
          Thông Tin Thợ
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <NavLink to="#" className="flex items-center">
          Tìm Khách Hàng
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <NavLink to="#" className="flex items-center">
          Docs
        </NavLink>
      </Typography>
      {/* <Routes>
        <Route path="/1" element={<MainDashboard />} />
        <Route path="/info" element={<InfoWorkers />} />
      </Routes> */}
    </ul>
  )
}

export default NavbarGuest
