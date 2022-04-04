import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getOneRoute } from '../api/route';

type Props = {}

const CoursesDetail = (props: Props) => {
    const [coure, setCoure] = useState([]);
    const {id} = useParams()
    useEffect(()=>{
        const getCoure = async () => {
            const {data} = await getOneRoute(id);           
            setCoure(data)
        };
        getCoure()
    }, [])
    
  return (
    <div className='flex justify-between w-[100%]'>
        <section className="">
          <h1 className='text-3xl font-[600]'>{coure?.title}</h1>
          <p>{coure?.description}</p>
          <div className="mt-[30px]">
            <h2 className='text-2xl font-[600]'>Bạn sẽ học được gì</h2>
          </div>
          <div className="flex flex-wrap">
            {coure?.will_learns?.map((Element, index)=>{
              return (
                <span key={index} className="w-[45%] mb-[20px]">✔️{Element.content}</span>
              )
            })}
          </div>
        </section>
        <section className="mr-[50px] w-[200px]">
            <img className='rounded-xl w-[200px]' src={coure?.image_url} alt="" />
        </section>
    </div>
  )
}

export default CoursesDetail