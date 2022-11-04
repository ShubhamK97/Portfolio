import React from 'react'
import { useSelector } from 'react-redux';
import SectionTitle from '../../components/SectionTitle'
//import {experiences} from '../../resources/experiences';
function Experiences() {
    const [selectedItemIndex,setSelectedItemIndex] = React.useState(0);
    const {portfolioData} = useSelector((state)=>state.root); 
    const {experiences} = portfolioData;
    
  return (
    <div>
        <SectionTitle title="Experience"/>

        <div className='flex py-10 gap-20 sm:flex-col'>
            
            <div className='flex flex-col gap-10 border-l-2 border-[#3a9aa78b]  w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full'>
                {experiences.map((experience,index)=>(
                    <div onClick={()=>{
                        setSelectedItemIndex(index) 
                    }}   className='cursor-pointer' >
                        <h1 className={`text-xl px-5  ${selectedItemIndex === index ? 'text-tertiary border-tertiary border-l-4 -ml-[4px] bg-[#1d70976b] py-3' : 'text-white'}`}>{experience.period}</h1>
                    </div>
                ))}
            </div>

            <div className='flex flex-col gap-5'>
                <h1 className='text-secondary text-xl'>{experiences[selectedItemIndex].title}</h1>   
                <h1 className='text-secondary text-xl'>{experiences[selectedItemIndex].company }</h1>
                <p className='text-white'>
                    I am working here since 2021. And i work on a BankCard system and having knowledge  about bankcard payment system.
                    I fixes the daily assigned bug. And provied the user friendly solution of some spec.    
                </p>       
            </div>

        </div>
    </div>
  )
}

export default Experiences