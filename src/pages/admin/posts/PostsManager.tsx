import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { postType } from '../../../type/posts';

type Props = {
    posts: postType,
    onRemove: (id:number)=> void
}

const PostsManager = (props: Props) => {
    console.log(props);
    
  return (
    <div>
        <div className="flex justify-between">
            <h1>Posts Page</h1>
            <a href="/admin/posts/add">Add</a>
        </div>
        <table>
            <thead>
                <tr>
                <th>#</th>
                <th>Title</th>
                <th>Body</th>
                <th colSpan={2}>-----</th>
                </tr>
            </thead>
            <tbody>
            {props.posts.map(({title, description, id}, index)=>{
                return(
                <tr key={index}>
                <td>{id}</td>
                <td>{title}</td>
                <td>{description}</td>
                <td><NavLink to={`/admin/posts/edit/${id}`}>Edit</NavLink> </td>
                <td><button onClick={()=>{props.onRemove(id)}}>Remove</button></td>
                </tr>
                )
            })}
            </tbody>
        </table>
    </div>
  )
}

export default PostsManager