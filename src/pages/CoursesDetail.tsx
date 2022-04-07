import React, { useEffect, useState } from 'react'
import { NavLink, Outlet, useParams } from 'react-router-dom';
import { getOneRoute } from '../api/route';

type Props = {}

const CoursesDetail = (props: Props) => {
  const [coure, setCoure] = useState([]);
  const { id } = useParams()

  useEffect(() => {
    const getCoure = async () => {
      const { data } = await getOneRoute(id);
      setCoure(data)
    };
    getCoure()

  }, [])
  console.log(coure);
  

  useEffect(() => {
    const showIcon = () => { }
    const show = (callback) => {
      const nutDrop = document.querySelectorAll(".nut-drop");
      const noiDungDrop = document.querySelectorAll(".noidung-drop")

      for (let i = 0; i < nutDrop.length; i++) {
        nutDrop[i].onclick = () => {
          const titleHeight = nutDrop[i].clientHeight - noiDungDrop[i].clientHeight
          const open = nutDrop[i].clientHeight < 60;

          if (!open) {
            nutDrop[i].style.height = `${titleHeight}px`
            nutDrop[i].classList.add("overflow-hidden")
            callback()
          }
          else {
            console.log(titleHeight);
            nutDrop[i].style.height = `${noiDungDrop[i].clientHeight + nutDrop[i].clientHeight}px`
            nutDrop[i].classList.toggle("overflow-hidden")
            callback()
          }

        }
      }

    }
    show(showIcon)
  })
  const showBtnRegis = () => {
    if (localStorage.getItem("user")) {
      const { User } = JSON.parse(localStorage.getItem("user"));
      if (User.is_registered.includes(coure?.slug)) {
        return (
          <div className="mt-[20px]">
            <NavLink to="learn" className='hover:bg-black duration-100 py-[10px] px-[30px] text-lg font-semibold text-white bg-[orange] rounded-3xl'>Tiếp tục học</NavLink>
          </div>

        )
      }
      else {
        return (
          <button className='hover:bg-black duration-100 py-[10px] px-[30px] text-lg font-semibold text-white mt-[20px] bg-[orange] rounded-3xl'>Đăng kí</button>
        )
      }

    }
    else {
      return (
        <button className='hover:bg-black duration-100 py-[10px] px-[30px] text-lg font-semibold text-white mt-[20px] bg-[orange] rounded-3xl'>Đăng kí</button>
      )
    }
  }
  showBtnRegis()


  return (
    <div className='flex justify-between pr-[50px]'>
      <section className="w-[65%]">
        <h1 className='text-3xl font-[600]'>{coure?.title}</h1>
        <p>{coure?.description}</p>
        <div className="mt-[30px]">
          <h2 className='text-2xl font-[600]'>Bạn sẽ học được gì</h2>
        </div>
        <div className="flex flex-wrap">
          {coure?.will_learns?.map((Element, index) => {
            return (
              <span key={index} className="w-[45%] mb-[10px]"><i className="fa-solid fa-check text-[orange] mr-[10px] text-lg"></i>{Element.content}</span>
            )
          })}
        </div>
        <div className="mt-[30px]">
          <h1 className='text-2xl font-[600]'>Nội dung khóa học</h1>
          <ul className='flex '>
            <li><span className='font-semibold'>{coure?.tracks?.length}</span> chương</li>
            ▪️
            <li><span className='font-semibold'>
              {coure?.tracks?.reduce((accument, currentValue) => {
                return accument + currentValue?.track_steps?.length
              }, 0)}
            </span> bài học
            </li>
          </ul>
          <div className="">
            {coure?.tracks?.map((Element, index) => {
              return (
                <div className='nut-drop my-[10px] bg-white select-none' key={index}>
                  <div className="flex justify-between items-center border rounded-md px-[30px] py-[10px] bg-[#f5f5f5]">
                    <h1 className="font-semibold text-lg m-0"><i className="fa-solid fa-plus"></i> {index + 1}. {Element?.title}</h1>
                    <span>{Element?.track_steps?.length} bài học</span>
                  </div>
                  <div className="noidung-drop">
                    {Element.track_steps?.map((step, index) => {
                      return (
                        <h2 className='py-[10px] px-[30px] border-b' key={index}>{index + 1}. {step?.step?.title}</h2>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <div className={`w-[30%] text-center `}>
        <div className="sticky top-0">
          <img className='rounded-xl w-[100%]' src={coure?.image_url} alt="" />
          {showBtnRegis()}
          <ul className="justify-items-start grid justify-center mt-[20px]">
            <li className='py-[5px]'><i className="fa-solid fa-gauge-high"></i> Trình độ cơ bản</li>
            <li className='py-[5px]'><i className="fa-solid fa-film"></i>
              {coure?.tracks?.reduce((accument, currentValue) => {
                return accument + currentValue?.track_steps?.length
              }, 0)} bài học
            </li>
            <li className='py-[5px]'><i className="fa-solid fa-battery-full"></i>Học mọi lúc, mọi nơi</li>
          </ul>
        </div>
      </div>
      <Outlet />
    </div>
  )
}

export default CoursesDetail