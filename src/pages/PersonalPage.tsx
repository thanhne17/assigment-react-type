import React, { useEffect, useState } from 'react'
import {useForm, SubmitHandler} from "react-hook-form"
import { getOneUser } from '../api/user'

type Props = {}

type typeInput = {
  name: String,
  email: String
}

const PersonalPage = (props: Props) => {
  const [userInfo, setUserInfo] = useState([]);
  useEffect(()=>{
    document.title = "Cài đặt tài khoản"
    const getUser =async () => {
      if (localStorage.getItem("user")) {
        const id = JSON.parse(localStorage.getItem("user"))._id
        const {data} = await getOneUser(id);
        reset(data)
        
      }
    }
    getUser()
  }, [])
  
  const {register, handleSubmit, formState: {errors}, reset} = useForm<typeInput>();
  const onSubmit: SubmitHandler<typeInput> = data => {
    console.log(data);
    
  }
  return (
    <div className='w-[80%] mx-auto mt-[70px]'>
        <h1 className='text-3xl font-semibold'>Cài đặt tài khoản</h1>

        <div className="w-[70%]">
          <p className='text-xl font-semibold border-b mt-[30px]'>Thông tin cá nhân</p>
          <form action="" onSubmit={handleSubmit(onSubmit)}>
            <div className="mt-[50px]">
              <label className='block font-semibold' htmlFor="name">Tên</label>
              <input className='w-[70%] outline-0 border-b' type="text" {...register("name")}/>
              <p>Tên của bạn xuất hiện trên trang cá nhân và bên cạnh các bình luận của bạn.</p>
            </div>

            <div className="mt-[50px]">
              <label className='block font-semibold' htmlFor="email">Email</label>
              <input className='w-[70%] outline-0 border-b' type="text" {...register("email")}/>
              <p>Email này sẽ giúp bạn đăng nhập vào hệ thống.</p>
            </div>

            <button className='mt-[50px] bg-[orange] p-[10px] rounded-md hover:bg-black hover:text-white duration-100'>Cập nhật</button>
          </form>
        </div>
    </div>
  )
}

export default PersonalPage