import React from 'react'
import Events from '/assets/Events/Events.svg'
const EventsHero = () => {
  return (
    <div className="bg-[url('/assets/Events/BlueBackground.svg')] bg-no-repeat bg-cover">
      <div className="bg-[url('/assets/Events/Group.svg')] bg-no-repeat bg-cover bg-bottom">
      <div className="bg-[url('/assets/Events/Torch.svg')] bg-no-repeat bg-cover bg-left-bottom  bg-[length:270px] ss:bg-[length:320px] md:bg-left-bottom-3 smd:bg-[length:410px] ">
        <div className=' pb-60 pt-44 ss:pt-52 ss:pb-56   sm:pb-72 sm:pt-48  md:pb-80 md:pt-56 flex justify-center'>
        <img src={Events} className='size-3/5 sm:size-3/6  md:size-2/5' />
        </div>
        </div>
      </div>
    </div>
  )
}

export default EventsHero
