import React, { useEffect, useState } from 'react'
import { Navigate, NavLink } from 'react-router-dom'

type Props = {}

const Header = (props: Props) => {
    const [btn, setBtn] = useState(1)
    const [courseIsregistered, setCourseRegistered] = useState([])

    useEffect(() => {
        const showDropDown = () => {
            if (document.querySelector(".nut_dropdown")) {
                document.querySelector(".nut_dropdown").onclick = () => {
                    document.querySelector(".noidung_dropdown").classList.toggle("show");
                }
            }
            if (document.querySelector(".nut_dropdown2")) {
                document.querySelector(".nut_dropdown2").onclick = () => {
                    document.querySelector(".noidung_dropdown2").classList.toggle("show");
                }
            }

            window.onclick = function (e) {
                if (!e.target.matches('.nut_dropdown')) {
                    var noiDungDropdown = document.querySelector(".noidung_dropdown");
                    if (noiDungDropdown?.classList.contains('show')) {
                        noiDungDropdown.classList.remove('show');
                    }
                }
                if (!e.target.matches('.nut_dropdown2')) {
                    var noiDungDropdown2 = document.querySelector(".noidung_dropdown2");
                    if (noiDungDropdown2?.classList.contains("show")) {
                        noiDungDropdown2.classList.remove('show');
                    }
                }
            }
        }
        showDropDown();

        if (localStorage.getItem("user")) {
            const { User } = JSON.parse(localStorage.getItem("user"));
            if (User.is_registered.length == 0) {
                setCourseRegistered(["Bạn chưa đăng kí khóa học nào"])
            }
            else {
                setCourseRegistered(User.is_registered)
            }
        }
        else{
            setCourseRegistered(["Bạn chưa đăng kí khóa học nào"])

        }

    }, [])

    const isAuthenticate = () => {
        if (btn == 1  && localStorage.getItem("user")) {
            return (
                <span className="relative">
                    <img className="nut_dropdown w-[38px] inline rounded-3xl" src="https://avatar-redirect.appspot.com/google/109787174074203033336?size=400" alt="" />
                    <div className="sign">
                        <div className="noidung_dropdown w-[200px] absolute top-[90%] right-0 translate-y-[20px] rounded p-[10px] bg-white">
                            <NavLink className="block duration-100 hover:text-[orange] pb-[10px] text-black" to="/personal">Tài khoản của tôi</NavLink>
                            <NavLink className="block duration-100 hover:text-[orange] py-[10px] border-t text-black" to="/admin">Admin</NavLink>
                            <p onClick={() => {
                                localStorage.removeItem("user")
                                setBtn(0)
                            }} className="block mb-0 duration-100 hover:text-[orange] pt-[10px] border-t text-black cursor-pointer">Đăng xuất</p>
                        </div>
                    </div>
                </span>
            )
        }
        else {
            return (
                <NavLink className="text-white px-[10px] py-[5px] bg-[orange] rounded" to="/signin">
                    Đăng nhập
                </NavLink>
            )
        }
    }
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
                    <div className="inline relative">
                        <span className='nut_dropdown2 text-[#333333] font-semibold cursor-pointer hover:text-[#ccc] duration-300'>Khóa học của tôi</span>
                        <div className="noidung_dropdown2 w-[200px] absolute top-[90%] translate-y-[20px] rounded p-[10px] bg-white">
                            {courseIsregistered.map((Element, index) => {
                                return (
                                    <h1 key={index}>{Element}</h1>
                                )
                            })}
                        </div>
                    </div>
                    <i className="fa-solid fa-bell text-[#bbb] mx-[30px] text-lg hover:text-[#000] hover:cursor-pointer"></i>
                    {isAuthenticate()}
                </div>
            </div>
        </header>

    )
}

export default Header