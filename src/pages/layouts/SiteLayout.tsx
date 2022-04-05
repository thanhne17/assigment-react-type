import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import NavSite from '../../components/NavSite'

type Props = {}

const SiteLayout = (props: Props) => {
    return (
        <div>
            <Header />
            <div className="flex">
                <div className=""><NavSite/></div>
                <div className="overflow-hidden mt-[20px] w-[100%]">
                    <Outlet />
                </div>
            </div>

            <Footer />
        </div>
  )
}

export default SiteLayout