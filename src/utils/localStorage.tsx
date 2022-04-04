import { user } from "../type/user";
import { NavLink } from "react-router-dom";

export const authenticated = (user: user, next: () => void) => {
    localStorage.setItem('user', JSON.stringify(user));
    next();
}
export const isAuthenticate = () => {
    if(!localStorage.getItem('user')) {
        return <a className="text-white px-[10px] py-[5px] bg-[orange] rounded" href="/signin">
                            Đăng nhập
                        </a>
                
    }
    else{
        return <span className="relative">
        <img className="nut_dropdown w-[38px] inline rounded-3xl" src="https://avatar-redirect.appspot.com/google/109787174074203033336?size=400" alt="" />
        <div className="sign">
            <div className="noidung_dropdown w-[200px] absolute top-[90%] right-0 translate-y-[20px] rounded p-[10px] bg-white">
                <NavLink className="block duration-100 hover:text-[orange] pb-[10px] text-black" to="/personal">Tài khoản của tôi</NavLink>
                <NavLink className="block duration-100 hover:text-[orange] py-[10px] border-t text-black" to="/admin">Admin</NavLink>
                <p className="block mb-0 duration-100 hover:text-[orange] pt-[10px] border-t text-black cursor-pointer">Đăng xuất</p>
            </div>
        </div>
    </span>
    }

    
}