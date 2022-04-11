import React, { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'
import { getAllVideos, getOneVideo } from '../../../api/video'

type Props = {}

type formInput = {}

const EditVideo = (props: Props) => {
    const { slug } = useParams()
    const { register, formState: { errors }, reset, handleSubmit } = useForm<formInput>()
    const [video, setVideo] = useState();

    useEffect(() => {
        const getVideo = async () => {
            const { data } = await getOneVideo(slug);            
            setVideo(data)
        };
        getVideo()

    }, [])
    console.log(video);
    
    const onSubmit: SubmitHandler<formInput> = async () => {

    }
    return (
        <div className='w-[80%] mx-auto mt-[30px]'>
            <h1 className='text-3xl font-semibold'>Cập nhật bài học khóa {video?.course_name}</h1>
            <div className="flex mt-[50px]">
                <ul className='border-r mr-[30px]'>
                    {video?.video_info?.map((Element, index)=>{
                        return (
                            <li key={index} className='py-[10px] border-b'>Bài {index + 1}: {Element?.video_name}</li>
                        )
                    })}
                </ul>
            <form action="" onSubmit={handleSubmit(onSubmit)}>
                        <div className="w-[100%]">
                            <div className="mt-[30px]">
                                <label className='block font-semibold' htmlFor="name">Tên bài học:</label>
                                <input className='bg-[#f0f2f5] w-[70%] outline-0 border-b' type="text"  />
                                <p>Tên cùng với ảnh sẽ giúp người dùng dễ nhận biết hơn.</p>
                            </div>
                        </div>
                <button className='mt-[50px] bg-[orange] p-[10px] rounded-md hover:bg-black hover:text-white transition-transform'>Cập nhật</button>
            </form>
            </div>
        </div>
    )
}

export default EditVideo