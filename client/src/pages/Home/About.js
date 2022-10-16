import React from 'react'
import SectionTitle from '../../components/SectionTitle'

function About() {
    const skills = [
        "Javascript",
        "React",
        "NodeJs",
        "Express",
        "MongoDB",
        "SQL",
    ];
    return (
        <div>
            <SectionTitle title="About" />
            <div className='flex w-full items-center sm:flex-col'>
                <div className='h-[70vh] w-1/2  sm:w-full'>
                    <lottie-player src="https://assets9.lottiefiles.com/private_files/lf30_WdTEui.json" background="transparent" speed="1" ></lottie-player>
                </div>
                <div className='flex flex-col gap-5 w-1/2 sm:w-full'>
                <p className='text-white '>
                   Hello! My name is shubham Kumar . I enjoy creating things that makes me happy.
                   My interest in web development starting in back 2018 when i try to design the UI.
                   During my collage time i learn and interested in HTML & CSS! . And now its become 
                   my passion.      
                </p>
                <p className='text-white'>
                   Fast-forward to today, and i have had a privilege of working at an advertising agency,
                   a start-up, a huge corporation. My main focus these days is bbuilding accessible , inclusive
                   products. Currently i am learning technologies  js, React, Nodejs mongodb. to inhance my skills.
                   And side-by-side during DSA problems on GeeksForGeeks & Leetcode.       
                </p>
            </div>
            </div> 
            <div className='py-5'>
                <h1 className='text-tertiary text-xl'>
                    Here are few technologies I've working on recently:    
                </h1>
                <div className='flex flex-wrap gap-10 mt-5'>
                    {skills.map((skill,index)=>(
                        <div className='border border-tertiary py-3 px-10'>
                        <h1 className='text-tertiary'>{skill}</h1>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default About