import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import axios from 'axios';


type TypeInput = {
    name: String,
    body: String,
}

type PropsPostAdd = {
    onAdd: (post: TypeInput ) => void
}
const PostAdd = (props: PropsPostAdd) => {

  const {register, handleSubmit, formState:{errors}} = useForm<PropsPostAdd>();
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
      .then((res)=>{
        data.image_url = res.data.url;
        console.log(data);
        props.onAdd(data);
        
      })
    
    
    // navigate("/admin/posts")
  }

  return (
      <div className="">
          <Outlet />
          <form action="" onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder='Tên khóa học' {...register('title')} /> <br />
            <input type="text" placeholder='Mô tả' {...register('description')} /><br />
            <input type="file" placeholder='Ảnh' {...register('image_url')}/><br />
            <input type="checkbox" value={true} {...register("isFontEnd")} /><br />
            <input type="checkbox" value={true} {...register("isBackEnd")} /><br />
            <button>Add</button><br />
          </form>
      </div>
  )
}

export default PostAdd