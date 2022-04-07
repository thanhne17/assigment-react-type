import React from 'react'
import { NavLink } from 'react-router-dom'

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className='bg-[#181821] text-white mt-[70px]'>
      <div className="w-[80%] mx-auto py-[50px] flex justify-between">
        <div className="flex-1">
          <div>
            <img className="w-[38px] inline mr-[10px]" src="https://static.fullstack.edu.vn/static/media/f8-icon.7ad2b161d5e80c87e516.png" alt="" />
            <span className=''>Học Lập Trình Để Đi Làm</span>
          </div>
          <div className="text-[#ccc] mt-[20px]">
            <p>Điện thoại: 0354170225</p>
            <p>Email: thanhntph15251@fpt.edu.vn</p>
            Địa chỉ: Phú Xuyên Hà Nội
          </div>
        </div>

        <div className="flex-1">
          <h1 className='text-white font-semibold text-lg'>Về F8</h1>
          <div className="flex flex-col mt-[20px]">
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

        <div className="flex-1">
          <h1 className='text-white font-semibold text-lg'>Hỗ trợ</h1>
          <div className="flex flex-col mt-[20px]">
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
        <div className="flex-1">
          <h1 className='text-white font-semibold text-lg'>CÔNG TY CỔ PHẦN CÔNG NGHỆ GIÁO DỤC F8</h1>
          <div className="flex flex-col mt-[20px]">
            <p>Mã số thuế: 123456789</p>
            <p>Ngày thành lập: 17/10/2002</p>
            <p>Lĩnh vực: Công nghệ, giáo dục, lập trình. F8 xây dựng và phát triển những sản phẩm mạng lại giá trị cho cộng đồng.</p>
          </div>
        </div>
      </div>

      <div className="w-[80%] mx-auto py-[10px] flex justify-between">
        <h1 className='text-white'>© 2022 F8 - Nền tảng học lập trình số 1 Việt Nam</h1>
        <div className="">
          <i className="text-2xl text-[#0c88ef] fa-brands fa-facebook-square"></i>
          <i className="text-2xl text-[red] fa-brands fa-youtube"></i>
          <i className="text-2xl fa-brands fa-tiktok"></i>
        </div>
      </div>
    </div>
  )
}

export default Footer