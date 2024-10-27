import React from 'react'
import { assets } from '../../assets/assets'

const AppDownload = () => {
  return (
    <div className='m-auto mt-24 text-[max(3vw,10px)] text-center font-medium' id='app-download-id'>
        <p>For Better Experience Download <br/> Tomato App</p>
        <div className="flex justify-center gap-4 mt-10 cursor-pointer">
            <img className='' src={assets.play_store} alt="" />
            <img src={assets.app_store} alt="" />
        </div>
      
    </div>
  )
}

export default AppDownload
