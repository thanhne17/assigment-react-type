import React from 'react'
import { NavLink } from 'react-router-dom'
import RouteBackEnd from '../components/RouteBackEnd'
import RouteFontEnd from '../components/RouteFontEnd'

type Props = {}

const Learn = (props: Props) => {
  document.title = "Học lập trình"
  return (
    <div>
        <h1 className='text-3xl font-bold'>Khóa học</h1>
        <p className='text-lg mb-[100px]'>Các khóa học được thiết kế phù hợp cho cả người mới, miễn phí, nội dung dễ hiểu.</p>
        <RouteFontEnd />
        <RouteBackEnd />

        <div className="flex justify-between items-center mt-[20px]">
            <div className="">
                <h1 className='text-2xl font-bold'>Bạn đang tìm kiếm lộ trình học cho người mới?</h1>
                <p className='text-lg'>Các khóa học được thiết kế phù hợp cho người mới, lộ trình học rõ ràng, nội dung dễ hiểu.</p>
                <NavLink className="border p-[10px] rounded-3xl text-[orange] hover:bg-[#ccc] hover:text-white" to="/">
                    Xem lộ trình
                </NavLink>
            </div>
            <img className='w-[420px]' src="https://static.fullstack.edu.vn/static/media/fb-group-cards.4bd525b1b8baf7b1e5a2.png" alt="" />
        </div>
    </div>
  )
}

export default Learn