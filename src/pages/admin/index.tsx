import React, { useEffect, useState } from 'react'
import { getAll } from '../../api/post';

type Props = {}

const Index = (props: Props) => {
    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        const getAllPosts =async () => {
            const {data} = await getAll();
            setPosts(data.data)
        }
        getAllPosts()
    }, [])
  return (
    <div>
        Dashboad
    </div>
  )
}

export default Index