import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { getAllRoute } from '../api/route'

type Props = {}

const RouteBackEnd = (props: Props) => {
    const [coures, setCoures] = useState([]);

    useEffect(()=>{
        const getAllCoures =async ()=>{
            const {data} =await getAllRoute();
            
            setCoures(data)
        }
        getAllCoures()
    }, [])
    
    
  return (
    <div className="mt-[50px]">
        <div className="flex items-center justify-between mr-[30px]">
            <span className='mb-[20px]'>
                <h1 className='text-2xl font-black inline'>Lộ trình học Back-end</h1> <span className='bg-[#1473e6] p-[5px] rounded text-white'>Mới</span>
            </span>
            <NavLink className="" to="/courses">
                <h1 className="duration-300 hover:translate-x-1 text-[orange] hover:text-[#f05123] hover:underline font-semibold">Xem chi tiết <i className="fa-solid fa-chevron-right"></i></h1>
            </NavLink>
        </div>
        <div className="">
            <div className="flex flex-wrap justify-start">
            {coures.filter((Element)=>{
                return Element.isBackEnd
            }).map((data,index)=>{
                return (
                        <NavLink key={index} to={`/courses/${data.id}`} className="w-[23%] mx-[10px]">
                            <img className=' rounded-xl' src={data.image_url} alt="" />
                            <h1 className='font-semibold'>{data.title}</h1>
                            <p className='text-[#333333]'>
                                <i className="fa-solid fa-users"></i>
                                {data.students_count}
                            </p>
                        </NavLink>
                )
            })}
            </div>
        </div>
    </div>
  )
}

export default RouteBackEnd