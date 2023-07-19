// import React from 'react'
import {
  Typography,
} from "@material-tailwind/react";
import { NavLink } from "react-router-dom";
function NavbarGuest() {
  const navLinkStyle = ({ isActive }) => {
    return ('flex items-center font-bold px-4 py-2 rounded-lg' + (isActive ? ' px-4 py-2 bg-blue-500 text-white hover:bg-blue-600 duration-300' : ' text-white '))
  }
  return (
    <ul className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
      as="li"
      variant="small"
      color="blue-gray"
      className="p-1 font-normal">
        <NavLink className={navLinkStyle} to='/'>
          Trang Chủ
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <NavLink className={navLinkStyle} to='/thong-tin-tho'  >
          Thông Tin Thợ
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <NavLink className={navLinkStyle} to="/tim-kiem-khach-hang">
          Tìm Khách Hàng
        </NavLink>
      </Typography>
    </ul>
  )
}

export default NavbarGuest
