import React from 'react'
import { NavLink } from 'react-router-dom'

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className='bg-[#181821] text-white mt-[70px]'>
      <div className="w-[80%] mx-auto py-[70px] flex justify-between">
        <div>
          <div className="">
            <img className="w-[38px] inline mr-[10px]" src="https://static.fullstack.edu.vn/static/media/f8-icon.7ad2b161d5e80c87e516.png" alt="" />
            <span>Học Lập Trình Để Đi Làm</span>
          </div>
          <div className="text-[#ccc]">
            <p>Điện thoại: 0354170225</p>
            <p>Email: thanhntph15251@fpt.edu.vn</p>
            Địa chỉ: Phú Xuyên Hà Nội
          </div>
        </div>

        <div className="">
          <h1 className='text-white'>Về F8</h1>
          <div className="flex flex-col">
            <NavLink to="/">
              Giới thiệu
            </NavLink>
            <NavLink to="/">
              Cơ hội việc làm
            </NavLink>
            <NavLink to="/">
              Đối tác
            </NavLink>
          </div>
        </div>

        <div className="">
          <h1 className='text-white'>Về F8</h1>
          <div className="flex flex-col">
            <NavLink to="/">
              Giới thiệu
            </NavLink>
            <NavLink to="/">
              Cơ hội việc làm
            </NavLink>
            <NavLink to="/">
              Đối tác
            </NavLink>
          </div>
        </div>

        <div className="">
          <h1 className='text-white'>Hỗ trợ</h1>
          <div className="flex flex-col">
            <NavLink to="/">
              Liên hệ
            </NavLink>
            <NavLink to="/">
              Bảo mật
            </NavLink>
            <NavLink to="/">
              Điều khoản
            </NavLink>
          </div>
        </div>
    </div>
    </div>
  )
}

export default Footer