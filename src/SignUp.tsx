import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { signup } from './api/auth';

type TypeInputs = {
    name: string,
    email: string,
    password: string
}

const SignUp = () => {
    const { register, handleSubmit, formState: { errors }} = useForm<TypeInputs>();
    const navigate = useNavigate();

    const onSubmit: SubmitHandler<TypeInputs> = data => {
        signup(data)
        .then(()=>{navigate("/signin")})
        .catch((res)=>{console.log(res)})
    }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <div className="w-[100%] h-[100vh] bg-no-repeat bg-cover flex justify-center items-center bg-[url('https://static.fullstack.edu.vn/static/media/f8-og-image.7bfad51d2684a4d093a4.jpg')]">
          <div className="w-[100%] h-[100%] text-center backdrop-blur-sm pt-[100px]">
            <h1 className='font-bold text-2xl'>Đăng kí</h1>
            <input className='border-2 p-[10px] m-[10px] rounded indent-[10px] w-[500px]' type="text" placeholder='Tên' {...register('name', {required: true})} /> <br />
            <input className='border-2 p-[10px] m-[10px] rounded indent-[10px] w-[500px]' type="email" placeholder='Email' {...register('email', {required: true})} /> <br />
            <input className='border-2 p-[10px] m-[10px] rounded indent-[10px] w-[500px]' type="password" placeholder='Mật khẩu' {...register('password', {required: true})} /> <br />
          {Object.keys(errors).length !== 0 && (
            
            <ul className=''>
              {errors.name?.types === "required" && <li>Tên không được bỏ trống</li>}
              {errors.password?.types === "required" && (<li>Mật khẩu không được bỏ trống</li>)}
              {errors.email?.types === "required" && (<li>Mật khẩu không được bỏ trống</li>)}
            </ul>
          )}
            <button className='bg-[black] p-[10px] w-[500px] m-[10px] text-white rounded hover:bg-[orange]'>Đăng ký</button>
          </div>
        </div>
    </form>
  )
}

export default SignUp