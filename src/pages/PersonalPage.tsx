import React, { useEffect, useState } from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
import { getOneUser, updateUser } from '../api/user'

type Props = {}

type typeInput = {
  name: String,
  email: String,
  createdAt: String,
  updatedAt: String,
  is_registered: [],
  image: String,
  abc: String
}

const PersonalPage = (props: Props) => {
  const [userInfo, setUserInfo] = useState([]);
  useEffect(() => {
    document.title = "Cài đặt tài khoản"
    const getUser = async () => {
      if (localStorage.getItem("user")) {
        const id = JSON.parse(localStorage.getItem("user")).data._id
        const { data } = await getOneUser(id);
        setUserInfo(data)
        reset(data)
      }
    }
    getUser()

  }, [])

  const { register, handleSubmit, formState: { errors }, reset } = useForm<typeInput>();
  const onSubmit: SubmitHandler<typeInput> = async (data) => {
    if (localStorage.getItem("user")) {
      const id = JSON.parse(localStorage.getItem("user")).data._id;
      await updateUser(id, data)
    }

  }

  return (
    <div className='w-[80%] mx-auto mt-[70px]'>
      <h1 className='text-3xl font-semibold'>Cài đặt tài khoản</h1>
      <div className="w-[70%]">
        <p className='text-xl font-semibold border-b mt-[30px]'>Thông tin cá nhân</p>
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <div className="mt-[50px]">
            <label className='block font-semibold' htmlFor="name">Tên</label>
            <input className='w-[70%] outline-0 border-b' type="text" {...register("name")} />
            <p>Tên của bạn xuất hiện trên trang cá nhân và bên cạnh các bình luận của bạn.</p>
          </div>

          <div className="mt-[50px]">
            <label className='block font-semibold' htmlFor="email">Email</label>
            <input className='w-[70%] outline-0 border-b' readOnly type="text" {...register("email")} />
            <p>Email này sẽ giúp bạn đăng nhập vào hệ thống.</p>
          </div>

          <div className="mt-[50px]">
            <label className='block font-semibold' htmlFor="email">CreatedAt</label>
            <input className='w-[70%] outline-0 border-b' readOnly type="text" {...register("createdAt")} />
            <p>Email này sẽ giúp bạn đăng nhập vào hệ thống.</p>
          </div>

          <div className="mt-[50px]">
            <label className='block font-semibold' htmlFor="email">UpdatedAt</label>
            <input className='w-[70%] outline-0 border-b' readOnly type="text" {...register("updatedAt")} />
            <p>Email này sẽ giúp bạn đăng nhập vào hệ thống.</p>
          </div>

          <div className='mt-[50px] '>
            <p className='font-semibold'>Ảnh đại diện của bạn.</p>
            <div className="flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
              <div className="space-y-1 text-center">
                <div className="">
                  <img className='w-[100px] rounded-full' src={userInfo.image} alt="" />
                </div>
                <div className="flex text-sm text-gray-600">
                  <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                    <span>Upload a file</span>
                  </label>
                  <input id='file-upload' className='sr-only' type="file" {...register("image")} />
                </div>
              </div>
            </div>
          </div>

          <button className='mt-[50px] bg-[orange] p-[10px] rounded-md hover:bg-black hover:text-white transition-transform'>Cập nhật</button>
        </form>
      </div>
    </div>
  )
}

export default PersonalPage