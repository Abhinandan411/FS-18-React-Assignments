import React from 'react'
import Featured from './Featured'

function MainContent() {
  return (
    
    <>
     <main className='py-10 px-20'>
       <div className='flex justify-betweenm gap-2 mb-2 mt-2'>
        <div>
          <h1>We are changing the way people shop</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio cum voluptates possimus alias molestiae blanditiis dolores nostrum molestias ipsam voluptatem.</p>
          <a href="">OUR PRODUCTS</a>
        </div>

        <div>
          <img src="https://th.bing.com/th/id/R.0a95fad0aa00fdb4a28c2f8036b86fb0?rik=qgE3CRV8suY9xg&riu=http%3a%2f%2fdesignbump.com%2fwp-content%2fuploads%2f2015%2f08%2fLiving-Room-Furniture.jpg%3fx97918&ehk=zliEIb09E9GzuobrcbgJmkuuP8sm5ImpcrJbK8x5eg8%3d&risl=&pid=ImgRaw&r=0" alt="" />
        </div>
       </div>
     </main>
     <Featured/>


    </>
  )
}

export default MainContent