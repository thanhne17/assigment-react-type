import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { getOneUser, updateUser } from '../../../api/user';

type Props = {}

type formInput = {}

const ManagerAccount = (props: Props) => {
    const [user, setUser] = useState([]);
    const { formState: { errors }, handleSubmit, register, reset } = useForm();
    const { id } = useParams()
    useEffect(() => {
        const getUser = async () => {
            const { data } = await getOneUser(id)
            reset(data)
            setUser(data)
        }
        getUser()
    }, [])

    const onSubmit: handleSubmit<formInput> = async (data) => {
        console.log(data);
        await updateUser(id, data)

    }
    return (
        <div className='w-[80%] mx-auto mt-[30px]'>
            <h1 className='text-3xl font-semibold'>Cập nhật tài khoản</h1>
            <div className="w-[100%]">
                <p className='text-xl font-semibold border-b mt-[30px]'>Tên tài khoản: {user?.name}</p>
                <form action="" onSubmit={handleSubmit(onSubmit)}>
                    <div className="mt-[50px]">
                        <label className='block font-semibold' htmlFor="name">Tên</label>
                        <input className='bg-[#f0f2f5] w-[70%] outline-0 border-b' type="text" {...register("name", {required: true})} />
                        <p>Tên cùng với ảnh sẽ giúp người dùng dễ nhận biết hơn.</p>
                    </div>

                    <div className="mt-[50px]">
                        <label className='block font-semibold' htmlFor="email">Email</label>
                        <input type="text" className='bg-[#f0f2f5] w-[70%] outline-0 border-b' {...register("email", {required: true})} />
                        <p>Mô tả khái quát về khóa học.</p>
                    </div>

                    <div className='mt-[50px] '>
                        <p className='font-semibold'>Ảnh đại diện.</p>
                        <div className="flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                            <div className="space-y-1 text-center">
                                <div className="">
                                    <img className='w-[100px] rounded-full' src={user?.image} alt="" />
                                </div>
                                <div className="flex text-sm text-gray-600">
                                    <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                                        <span>Upload a file</span>
                                    </label>
                                    <input id='file-upload' className='bg-[#f0f2f5] sr-only' type="file" {...register("image_url", {required: true})} />
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

export default ManagerAccount