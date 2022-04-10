import React, { useEffect, useState } from 'react'
import { NavLink, useParams, Link } from 'react-router-dom'
import { getOneRoute } from '../api/route';
import { getAllVideos } from '../api/video';


type Props = {}

const VideoLearn = (props: Props) => {
    const [learn, setLearn] = useState([]);
    const [video, setVideo] = useState([]);
    const [videoPlay, setVideoPlay] = useState("https://www.youtube.com/embed/SdcdneSdoV4")
    const { slug } = useParams()

    useEffect(() => {
        const getLearn = async () => {
            const { data } = await getOneRoute(slug)
            setLearn(data)
            document.title = data.title
        }
        const getVideo = async () => {
            const { data } = await getAllVideos()
            setVideo(data.filter(item => item.course_name == slug))
            const abc = data.filter(item => item.course_name == slug)
            setVideoPlay(abc[0].url_video)
            // console.log(abc[0].url_video);
            
        }
        getVideo()
        getLearn()
    }, [])
    useEffect(() => {
        const showIcon = () => { }
        const show = (callback) => {
            const nutDrop = document.querySelectorAll(".nut-drop");
            const noiDungDrop = document.querySelectorAll(".noidung-drop")
            const nutDropDown = document.querySelectorAll(".nut-dropDown")

            for (let i = 0; i < nutDrop.length; i++) {
                nutDropDown[i].onclick = () => {
                    const titleHeight = nutDrop[i].clientHeight - noiDungDrop[i].clientHeight
                    const open = nutDrop[i].clientHeight < 60;

                    if (!open) {
                        nutDrop[i].style.height = `${titleHeight}px`
                        nutDrop[i].classList.add("overflow-hidden")
                        callback()
                    }
                    else {
                        console.log(titleHeight);
                        nutDrop[i].style.height = `${noiDungDrop[i].clientHeight + nutDrop[i].clientHeight}px`
                        nutDrop[i].classList.toggle("overflow-hidden")
                        callback()
                    }

                }
            }

        }
        const activeTrackStep = () => {
            const trackStep = document.querySelectorAll(".track-step");
            for (let i = 0; i < trackStep.length; i++) {
                trackStep[i].onclick = () => {
                    if (document.querySelector(".track-step.tab-active")) {
                        document.querySelector(".track-step.tab-active").classList.remove("tab-active");
                    }
                    trackStep[i].classList.add("tab-active");
                }
                
            }
        }
        activeTrackStep()
        show(showIcon)

    })
    return (
        <div className=''>
            <header className='bg-[#29303b] p-[15px] sticky top-0'>
                <Link className='' to="/">
                    <img className='w-[30px] inline mr-[10px]' src="https://static.fullstack.edu.vn/static/media/f8-icon.7ad2b161d5e80c87e516.png" alt="" />
                    <span className='text-[#fff] font-semibold'>{learn?.title}</span>
                </Link>
            </header>

            <main className='flex justify-between'>
                <div className="w-[100%] h-[100%]">
                    <div className="w-[75%] h-[515px] bg-[#000]">
                        <iframe className='w-[85%] h-[100%] mx-auto' src={`${videoPlay}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
                        </iframe>
                    </div>
                    <div className="mb-[50px] p-[50px]">
                        <h1 className=' font-semibold text-3xl'>Dựng base source</h1>
                        <p>Tham gia nhóm Học lập trình tại F8 trên Facebook để cùng nhau trao đổi trong quá trình học tập ❤️ </p>
                        <p> Các bạn subscribe kênh Youtube F8 Official để nhận thông báo khi có các bài học mới nhé ❤️</p>
                    </div>
                </div>
                <div className="w-[25%] h-[100%] fixed top-[60px] right-0 overflow-y-scroll bg-[#fff] border-l pb-[100px]">
                    <h1 className='sticky top-0 bg-[#fff] font-semibold text-xl px-[30px] pt-[10px]'>Nội dung bài học</h1>
                    <div className="">
                        {learn?.tracks?.map((Element, index) => {
                            return (
                                <div className='nut-drop my-[10px] bg-white select-none' key={index}>
                                    <div className="sticky backdrop-blur-3xl top-0 nut-dropDown flex justify-between items-center border px-[30px] py-[10px] bg-[#f5f5f5bf] flex justify-between">
                                        <h1 className="font-semibold text-base m-0 hover:cursor-pointer"> {index + 1}. {Element?.title} </h1><i className="fa-solid fa-angle-down"></i>
                                    </div>
                                    <div className="noidung-drop">
                                        {/* baif hojc */}
                                        {Element.track_steps?.map((step, index) => {
                                            return (
                                                <h2 onClick={() => {
                                                    setVideoPlay(video[index]?.url_video)

                                                }} className='track-step py-[10px] px-[30px] hover:bg-[#f0f0f0] hover:cursor-pointer duration-300' key={index}>{index + 1}. {step?.step?.title}</h2>
                                            )
                                        })}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </main>

            <footer className='shadow-xl fixed bottom-0 bg-[#f0f0f0] z-50 w-[100%] flex justify-between'>
                <div className="">

                </div>
                <div className="p-[10px]">
                    <span className='text-base font-semibold pr-[30px]'><i className="mr-[10px] fa-solid fa-angle-left"></i>Bài trước</span>
                    <span className='text-base font-semibold '>Bài tiếp theo<i className="ml-[10px] fa-solid fa-angle-right"></i></span>
                </div>
                <div className=""></div>
            </footer>
        </div>
    )
}

export default VideoLearn