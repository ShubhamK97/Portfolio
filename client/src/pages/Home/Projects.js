import React from 'react'
import SectionTitle from '../../components/SectionTitle'
import {projects} from '../../resources/projects';
function Projects() {
    const [selectedItemIndex,setSelectedItemIndex] = React.useState(0);
  return (
    <div>
        <SectionTitle title='Projects'/>
        <div className='flex py-10 gap-20 sm:flex-col'>
            
            <div className='flex flex-col gap-10 border-l-2 border-[#3a9aa78b]  w-1/2 sm:flex-row sm:overflow-x-scroll sm:w-full'>
                {projects.map((project,index)=>(
                    <div onClick={()=>{
                        setSelectedItemIndex(index) 
                    }}   className='cursor-pointer' >
                        <h1 className={`text-xl px-5  ${selectedItemIndex === index ? 'text-tertiary border-tertiary border-l-4 -ml-[4px] bg-[#1d70976b] py-3' : 'text-white'}`}>{project.title}</h1>
                    </div>
                ))}
            </div>

            <div className='flex items-center justify-center gap-10 sm:flex-col'>
                <img src={projects[selectedItemIndex].image} alt="" className = 'h-62 w-72'/>
            <div className='flex flex-col gap-5'>
                <h1 className='text-secondary text-xl'>{projects[selectedItemIndex].title}</h1>   
               {/* <h1 className='text-secondary text-xl'>{experiences[selectedItemIndex].company }</h1> */}
               <p className='text-white'>{projects[selectedItemIndex].description}</p>
                <p className='text-white'>
                    I am working here since 2021. And i work on a BankCard system and having knowledge  about bankcard payment system.
                    I fixes the daily assigned bug. And provied the user friendly solution of some spec.    
                </p>       
            </div>    
            </div>

        </div>
    </div>
  )
}

export default Projects