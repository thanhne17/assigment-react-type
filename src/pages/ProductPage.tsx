import React, { useEffect, useState } from 'react'
import { postType } from "../type/posts"

type Props = {
  posts: postType
}

const ProductPage = (props: Props) => {
console.log(props);

  return (
    <div>
        Font end page
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
            {props.posts.filter((Element)=>{
              return !Element.isFontEnd || Element.isBackEnd == true
            }).map((das,index)=>{
              return (
                <tr key={index}>
                <td>{das.id}</td>
                <td>{das.title}</td>
                <td>{das.description}</td>
                <td><button>Edit</button></td>
                <td><button>Remove</button></td>
              </tr>
              )
            })}
          </tbody>
        {/* <tbody>
          {props.posts.map(({title, description, id}, index)=>{
            return(
              <tr key={index}>
               <td>{id}</td>
               <td>{title}</td>
               <td>{description}</td>
               <td><button>Edit</button></td>
               <td><button>Remove</button></td>
             </tr>
            )
          })}
        </tbody> */}
      </table>
    </div>

  )
}

export default ProductPage