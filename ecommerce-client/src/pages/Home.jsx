import React from 'react'
import Header from '../components/Header'

export default function Home() {
  return (
    <div>
        <Header/>
        <p className='container'>banner Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil voluptas assumenda vitae deleniti, unde at! Voluptate velit ad, nobis quibusdam, et corporis ut dolor praesentium nemo repellendus corrupti quo voluptas!</p>
        <div className='container grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {
            [1,2,3,4].map(el =>{
              return <div className='h-40 border border-black'> product</div>
            })
          }
        </div>
    </div>
  )
}
