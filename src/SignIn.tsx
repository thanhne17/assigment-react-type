import { useForm, SubmitHandler } from 'react-hook-form';
import { NavLink, useNavigate } from 'react-router-dom';
import { signin } from './api/auth';
import { authenticated } from './utils/localStorage';

type TypeInputs = {
    name: string,
    email: string,
    password: string
}

const SignIn = () => {
    const { register, handleSubmit, formState: { errors }} = useForm<TypeInputs>();
    const navigate = useNavigate();

    const onSubmit: SubmitHandler<TypeInputs> = async data => {
        const {data : user } =await signin(data)
        authenticated(user, ()=>{
          navigate("/")
        })
    }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <div className="w-[100%] h-[100vh] bg-no-repeat bg-cover flex justify-center items-center bg-[url('https://fasttrack.edu.vn/wp-content/uploads/2020/08/khoa-hoc-lap-trinh-vien-chuyen-nghiep-1000x480.jpg')]">
          <div className="w-[100%] h-[100%] text-center backdrop-blur pt-[150px]">
            <h1 className='font-bold text-2xl'>Đăng nhập</h1>
            <input className='border-2 p-[10px] m-[10px] rounded indent-[10px] w-[500px]' type="email" placeholder='Email' {...register('email', {required: true})} /> <br />
            <input className='border-2 p-[10px] m-[10px] rounded indent-[10px] w-[500px]' type="password" placeholder='Mật khẩu' {...register('password', {required: true})} /> <br />
            <button className='bg-[black] w-[500px] p-[10px] m-[10px] text-white rounded hover:bg-[orange]'>Đăng nhập</button>
          <div className="">
            <NavLink className="text-white" to="/">Quên mật khẩu?</NavLink>/
            <NavLink className="text-white" to="/signup">Đăng kí</NavLink>
          </div>
          </div>
        </div>
    </form>
  )
}

export default SignIn