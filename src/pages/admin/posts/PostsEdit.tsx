import axios from 'axios'
import React, { useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import { getOneRoute } from '../../../api/route'

type Props = {
    onUpdate: ()=>void
}
type FormInput = {
    name: String,
    body:String
}

const PostsEdit = (props: Props) => {
    const {formState: {errors}, register, handleSubmit, reset} = useForm<FormInput>();
    const navigate = useNavigate();
    const {id} = useParams();

    useEffect(()=>{
        const getPosts =async () => {
            const {data} = await getOneRoute(id);
            reset(data)
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
            
            const {data} = await axios({
                method:"POST",
                url: "https://api.cloudinary.com/v1_1/djsbi0bma/image/upload",
                data: formData
            })
            imgUploaded = data.url
            route.image_url = imgUploaded;
            console.log(imgUploaded);
             
        }
            console.log(route);
            
            props.onUpdate(id,route);
            navigate("/admin/posts")

    }

  return (
    <form action="" onSubmit={handleSubmit(onSubmit)}>
    <input type="text" placeholder='Tên khóa học' {...register('title')} /> <br />
    <input type="text" placeholder='Mô tả' {...register('description')} /><br />
    <input type="file" placeholder='Ảnh' {...register('image_url')}/><br />
    <input type="checkbox" value={true} {...register("isFontEnd")} /><br />
    <input type="checkbox" value={true} {...register("isBackEnd")} /><br />
    <button>Update</button><br />
  </form>
  )
}

export default PostsEdit