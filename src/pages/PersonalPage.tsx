import React, { useEffect, useState } from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
import { getOneUser, updateUser } from '../api/user'

type Props = {}

type typeInput = {
  name: String,
  email: String,
  createdAt: String,
  updatedAt: String,
  image: String
}

const PersonalPage = (props: Props) => {
  const [userInfo, setUserInfo] = useState([]);
  useEffect(() => {
    document.title = "Cài đặt tài khoản"
    const getUser = async () => {
      if (localStorage.getItem("user")) {
        const id = JSON.parse(localStorage.getItem("user")).User._id
        const { data } = await getOneUser(id);
        setUserInfo(data)
        reset(data)
      }
    }
    getUser()

  }, [])

  const { register, handleSubmit, formState: { errors }, reset } = useForm<typeInput>();
  const onSubmit: SubmitHandler<typeInput> = async (data) => {
    console.log(data);
    if (localStorage.getItem("user")) {
      const id = JSON.parse(localStorage.getItem("user")).User._id;
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

          <div className="mt-[50px]">
            <p className='font-semibold'>Ảnh đại diện của bạn.</p>
            <img className='w-[100px] rounded-full' src={userInfo.image} alt="" />
          </div>

          <div>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
              <div className="space-y-1 text-center">
                <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                  <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div className="flex text-sm text-gray-600">
                  <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                    {/* <span>Upload a file</span> */}
                  </label>
                    <input type="file" {...register("image")} />
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