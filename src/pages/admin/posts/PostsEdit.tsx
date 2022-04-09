import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import { getOneRoute } from '../../../api/route'

type Props = {
    onUpdate: () => void
}
type FormInput = {
    name: String,
    body: String
}

const PostsEdit = (props: Props) => {
    const { formState: { errors }, register, handleSubmit, reset } = useForm<FormInput>();
    const navigate = useNavigate();
    const { id } = useParams();
    const [courseInfo, setCourseInfo] = useState([])

    useEffect(() => {
        const getPosts = async () => {
            const { data } = await getOneRoute(id);
            reset(data)
            setCourseInfo(data)
        }
        getPosts()
    }, [])
    let imgUploaded = ""
    const onSubmit: SubmitHandler<FormInput> = async (route) => {
        if (route.image_url[0] != "h") {
            const file = route.image_url[0];
            const formData = new FormData();
            formData.append("file", file);
            formData.append("upload_preset", "edlvdeks");
            console.log(route.image_url[0]);

            const { data } = await axios({
                method: "POST",
                url: "https://api.cloudinary.com/v1_1/djsbi0bma/image/upload",
                data: formData
            })
            imgUploaded = data.url
            route.image_url = imgUploaded;
            console.log(imgUploaded);

        }
        props.onUpdate(id, route);
        navigate("/admin/posts")

    }

    return (
        <div className='w-[80%] mx-auto mt-[30px]'>
            <h1 className='text-3xl font-semibold'>Cập nhật khóa học</h1>
            <div className="w-[100%]">
                <p className='text-xl font-semibold border-b mt-[30px]'>{courseInfo?.title}</p>
                <form action="" onSubmit={handleSubmit(onSubmit)}>
                    <div className="mt-[50px]">
                        <label className='block font-semibold' htmlFor="name">Tên khóa học:</label>
                        <input className='bg-[#f0f2f5] w-[70%] outline-0 border-b' type="text" {...register("title")} />
                        <p>Tên cùng với ảnh sẽ giúp người dùng dễ nhận biết hơn.</p>
                    </div>

                    <div className="mt-[50px]">
                        <label className='block font-semibold' htmlFor="email">Mô tả:</label>
                        <textarea className='bg-[#f0f2f5] w-[70%] outline-0 border-b' {...register("description")}></textarea>
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
                                    <img className='w-[100px] rounded-md' src={courseInfo?.image_url} alt="" />
                                </div>
                                <div className="flex text-sm text-gray-600">
                                    <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                                        <span>Upload a file</span>
                                    </label>
                                    <input id='file-upload' className='bg-[#f0f2f5] sr-only' type="file" {...register("image_url")} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <button className='mt-[50px] bg-[orange] p-[10px] rounded-md hover:bg-black hover:text-white transition-transform'>Cập nhật</button>
                </form>
            </div>
        </div>
        //     <form action="" onSubmit={handleSubmit(onSubmit)}>
        //     <input type="text" placeholder='Tên khóa học' {...register('title')} /> <br />
        //     <input type="text" placeholder='Mô tả' {...register('description')} /><br />
        //     <input type="file" placeholder='Ảnh' {...register('image_url')}/><br />
        //     <input type="checkbox" value={true} {...register("isFontEnd")} /><br />
        //     <input type="checkbox" value={true} {...register("isBackEnd")} /><br />
        //     <button>Update</button><br />
        //   </form>
    )
}

export default PostsEdit