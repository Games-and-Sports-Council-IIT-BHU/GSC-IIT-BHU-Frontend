import './Events.css'
const HeroEvents = () => {
  return (
     <>  
         <div className="bg-events-group  bg-no-repeat bg-cover bg-center">
         <div className="bg-events-torch  bg-no-repeat bg-left-top-1 bg-[length:300px] sm:bg-left-top-2 sm:bg-[length:450px] ">
          <div className='flex justify-center text-4xl xxs:text-5xl ss:text-6xl sm:text-7xl smd:text-8xl md:text-9xl font-bold' >
            <p className='text-white  font-lexend  pt-28 pb-32 xs:pt-32 xs:pb-36 ss:pt-40 ss:pb-44 sm:pt-46 sm:pb-48 smd:pt-52 smd:pb-56 md:pt-60 md:pb-64' style={{letterSpacing:'-0.5rem'}}>Events</p>
          </div>
          </div>
        </div>
     </>
  )
}

export default HeroEvents