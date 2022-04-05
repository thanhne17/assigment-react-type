import React, { useEffect } from 'react'

type Props = {}

const HomeSlider = (props: Props) => {
    useEffect(()=>{
        $(document).ready(function() {
            $("#light-slider").lightSlider({
              auto: true,
              loop:true,
              item:1,
              speed: 1000,
              pause: 5000,
              pauseOnHover: true
            });
        });
        
    }, [])
  return (
    <ul id="light-slider" className='h-[270px]'>
        <li className='flex justify-between w-[100%] h-[100%] bg-gradient-to-r from-[#7612ff] to-[#05b2ff] rounded-xl p-[10px]'>
            <div className="py-[50px] pl-[40px]">
                <h3 className=' text-[#fff] text-3xl font-bold'>Thành quả của học viên</h3>
                <p className='text-white'>Để đạt được kết quả tốt trong mọi việc ta cần xác định mục tiêu rõ ràng cho việc đó. Học lập trình cũng không là ngoại lệ.</p>
            </div>
           <img className='' src="https://files.fullstack.edu.vn/f8-prod/banners/Banner_01_2.png" alt="" />
        </li>
        <li className='flex justify-between w-[100%] h-[100%] bg-gradient-to-r from-[#fe215e] to-[#ff9402] rounded-xl p-[10px]'>
        <div className="py-[50px] pl-[40px]">
                <a className='text-[#fff] text-3xl font-bold' rel="noreferrer noopener noreferrer" target="_blank" href="https://www.youtube.com/channel/UCNSCWwgW-rwmoE3Yc4WmJhw">F8 trên Youtube</a>
                <p className='text-white'>F8 được nhắc tới ở mọi nơi, ở đâu có cơ hội việc làm cho nghề IT và có những con người yêu thích lập trình F8 sẽ ở đó.</p>
            </div>
            <img src="https://files.fullstack.edu.vn/f8-prod/banners/Banner_03_youtube.png" alt="" />
        </li>
        <li className='flex justify-between w-[100%] h-[100%] bg-gradient-to-r from-[#007efe] to-[#06c3fe] rounded-xl p-[10px]'>
        <div className="py-[50px] pl-[40px]">
                <h3 className=' text-[#fff] text-3xl font-bold'>F8 trên Facebook</h3>
                <p className='text-white'>Để đạt được kết quả tốt trong mọi việc ta cần xác định mục tiêu rõ ràng cho việc đó. Học lập trình cũng không là ngoại lệ.</p>
            </div>
            <img src="https://files.fullstack.edu.vn/f8-prod/banners/Banner_04_2.png" alt="" />
        </li>
        <li className='flex justify-between w-[100%] h-[100%] bg-gradient-to-r from-[#2877fa] to-[#6717cd] rounded-xl p-[10px]'>
        <div className="py-[50px] pl-[40px]">
                <h3 className=' text-[#fff] text-3xl font-bold'>Học ReactJS Miễn Phí!</h3>
                <p className='text-white'>Để đạt được kết quả tốt trong mọi việc ta cần xác định mục tiêu rõ ràng cho việc đó. Học lập trình cũng không là ngoại lệ.</p>
            </div>
            <img src="https://files.fullstack.edu.vn/f8-prod/banners/Banner_web_ReactJS.png" alt="" />
        </li>
        
    </ul>
  )
}

export default HomeSlider