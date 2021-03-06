import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import axios from 'axios';


type TypeInput = {
    name: String,
    body: String,
}

type PropsPostAdd = {
    onAdd: (post: TypeInput) => void
}
const PostAdd = (props: PropsPostAdd) => {

    const { register, handleSubmit, formState: { errors } } = useForm<PropsPostAdd>();
    const navigate = useNavigate();

    const onSubmit: SubmitHandler<TypeInput> = (data) => {
        const file = data.image_url[0]
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "edlvdeks");

        axios({
            method: "post",
            url: "https://api.cloudinary.com/v1_1/djsbi0bma/image/upload",
            data: formData
        })
            .then((res) => {
                data.image_url = res.data.url;
                console.log(data);
                props.onAdd(data);
                navigate("/admin/posts")

            })


    }

    return (
        <div className="">
            <Outlet />
            <div className='w-[80%] mx-auto mt-[30px]'>
                <h1 className='text-3xl font-semibold'>Thêm khóa học</h1>
                <div className="w-[100%]">
                    <form action="" onSubmit={handleSubmit(onSubmit)}>
                    {Object.keys(errors).length !== 0 && (
                            <ul className='bg-[#f0f2f5] w-[70%]'>
                                {errors.title?.type === "required" && <li className='text-[red]'>Tên không được bỏ trống</li>}
                                {errors.description?.type === "required" && (<li className='text-[red]'>Mô tả không được bỏ trống</li>)}
                                {errors.email?.type === "required" && (<li className='text-[red]'>Email không được bỏ trống</li>)}
                            </ul>
                        )}
                        <div className="mt-[50px]">
                            <label className='block font-semibold' htmlFor="title">Tên khóa học:</label>
                            <input className='bg-[#f0f2f5] w-[70%] outline-0 border-b' type="text" {...register("title", { required: true })} />
                            <p>Tên cùng với ảnh sẽ giúp người dùng dễ nhận biết hơn.</p>
                        </div>

                        <div className="mt-[50px]">
                            <label className='block font-semibold' htmlFor="email">Mô tả:</label>
                            <textarea className='bg-[#f0f2f5] w-[70%] outline-0 border-b' {...register("description", { required: true })}></textarea>
                            <p>Mô tả khái quát về khóa học.</p>
                        </div>

                        <div className="mt-[50px]">
                            <label className='block font-semibold' htmlFor="email">Font end:</label>
                            <input className='bg-[#f0f2f5] w-[70%] outline-0 border-b' type="checkbox" {...register("isFontEnd")} />
                            <p>Người tạo ra giao diện trang web.</p>
                        </div>

                        <div className="mt-[50px]">
                            <label className='block font-semibold' htmlFor="email">Back end:</label>
                            <input className='bg-[#f0f2f5] w-[70%] outline-0 border-b' type="checkbox" {...register("isBackEnd")} />
                            <p>Người làm việc với dữ liệu...</p>
                        </div>

                        <div className='mt-[50px] '>
                            <p className='font-semibold'>Ảnh khóa học.</p>
                            <div className="flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                <div className="space-y-1 text-center">
                                    <div className="">
                                        <img className='w-[100px] rounded-md' src="" alt="" />
                                    </div>
                                    <div className="flex text-sm text-gray-600">
                                        <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                                            {/* <span>Upload a file</span> */}
                                        </label>
                                        <input id='file-upload' className='bg-[#f0f2f5]' type="file" {...register("image_url", { required: true })} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <button className='mt-[50px] bg-[orange] p-[10px] rounded-md hover:bg-black hover:text-white transition-transform'>Thêm</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default PostAdd