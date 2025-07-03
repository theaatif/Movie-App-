import React from 'react'
import Sidenav from './templates/Sidenav'

const Home = () => {
    document.title = "Movie App | Homepage"
  return (
    <> 
         <Sidenav/>
         <div className='w-[80%] h-full '></div>

      
      
    
    </>
  )
}

export default Home