import React, { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'
import { getAllVideos } from '../../../api/video'

type Props = {}

type formInput = {}

const EditVideo = (props: Props) => {
    const { slug } = useParams()
    const { register, formState: { errors }, reset, handleSubmit } = useForm<formInput>()
    const [video, setVideo] = useState([]);

    useEffect(() => {
        const getVideo = async () => {
            const { data } = await getAllVideos();
            const bsc = data.filter(item => item.course_name == slug);
            reset(bsc)
            setVideo(bsc)
        };
        getVideo()

    }, [])

    const onSubmit: SubmitHandler<formInput> = async () => {

    }
    return (
        <div className='w-[80%] mx-auto mt-[30px]'>
            <h1 className='text-3xl font-semibold'>Cập nhật bài học</h1>
            <div className="flex mt-[50px]">
                <ul className='border-r mr-[30px]'>
                    {video.map((Element, index)=>{
                        return (
                            <li className='py-[10px] border-b'>Bài {index + 1}: {Element?.video_name}</li>
                        )
                    })}
                </ul>
            <form action="" onSubmit={handleSubmit(onSubmit)}>
                {video?.map((Element, index) => {
                    return (
                        <div key={index} className="w-[100%]">
                            <p className='text-xl font-semibold border-b'>Bài {index + 1}:</p>
                            <div className="mt-[30px]">
                                <label className='block font-semibold' htmlFor="name">Tên bài học:</label>
                                <input className='bg-[#f0f2f5] w-[70%] outline-0 border-b' type="text" {...register(`${Element?.video_name}`)} />
                                <p>Tên cùng với ảnh sẽ giúp người dùng dễ nhận biết hơn.</p>
                            </div>
                        </div>
                    )
                })}
                <button className='mt-[50px] bg-[orange] p-[10px] rounded-md hover:bg-black hover:text-white transition-transform'>Cập nhật</button>
            </form>
            </div>
        </div>
    )
}

export default EditVideo