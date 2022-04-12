import React from 'react'
import { Navigate } from 'react-router-dom'

type Props = {
    children: JSX.Element
}

const PriveateRoute = (props: Props) => {
    if (localStorage.getItem("user")) {
        const {data} = JSON.parse(localStorage.getItem("user"))
        if (!data.role) {
            return <Navigate to="/"/>
        }
    }
  return props.children
}

export default PriveateRoute