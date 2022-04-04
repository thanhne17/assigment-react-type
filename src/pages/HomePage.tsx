import React from 'react'
import HomeSlider from '../components/HomeSlider'
import RouteBackEnd from '../components/RouteBackEnd'
import RouteFontEnd from '../components/RouteFontEnd'

type Props = {}

const HomePage = (props: Props) => {
  document.title = "Trang chủ"

  return (
    <div>
      <HomeSlider />
      <div className="mt-[30px]">
        <RouteFontEnd />
      </div>
      <RouteBackEnd />
    </div>
    )
}

export default HomePage