import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import ReactDOM from "react-dom"
import { isAuthenticate } from '../utils/localStorage'

type Props = {}

const Header = (props: Props) => {
    useEffect(()=>{
        if (document.querySelector(".nut_dropdown")) {
            document.querySelector(".nut_dropdown").onclick = () => {
                document.querySelector(".noidung_dropdown").classList.toggle("show");
            }
        }

        window.onclick = function(e) {
            if (!e.target.matches('.nut_dropdown')) {
            var noiDungDropdown = document.querySelector(".noidung_dropdown");
              if (noiDungDropdown.classList.contains('show')) {
                noiDungDropdown.classList.remove('show');
              }
            }
          }
    }, [])
  return (
    <header className='p-[10px] border-b sticky top-[0] z-[999] bg-[#fff]' id='header'>
        <div className="flex justify-between items-center w-[95%] mx-auto">
            <NavLink className='' to="/">
                <img className='w-[38px] inline mr-[10px]' src="https://static.fullstack.edu.vn/static/media/f8-icon.7ad2b161d5e80c87e516.png" alt="" />
                <span className='text-[#000] font-semibold'>Học lập trình để đi làm</span>
            </NavLink>

            <div className="search w-[400px] h-[40px] relative">
                <input className='border rounded-3xl w-[100%] h-[100%] indent-[30px] hover:border-[#333333] hover:border-[2px] duration-300' placeholder='Tìm kiếm khóa học, bài viết...' type="text" name="" id="" />
                <i className="fa-solid fa-magnifying-glass text-lg text-[#bbb] absolute top-[50%] left-[5px] translate-y-[-50%] hover:text-[#000] hover:cursor-pointer"></i>
            </div>
            <div className="">
                <span className='text-[#333333] font-semibold'>Khóa học của tôi</span>
                <i className="fa-solid fa-bell text-[#bbb] mx-[30px] text-lg hover:text-[#000] hover:cursor-pointer"></i>
                {isAuthenticate()}
            </div>       
        </div>
    </header>

)
}

export default Header