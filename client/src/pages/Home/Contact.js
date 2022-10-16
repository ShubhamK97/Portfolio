import React from 'react'
import SectionTitle from '../../components/SectionTitle'

function Contact() {

    const user = {
        name: "Shubham Kumar",
        age: '24',
        gender: "Male",
        email: "shubhamjnv97@gmail.com",
        mobile: '9565108006',
        country: 'INDIA'
    }

    return (
        <div>
            <SectionTitle title='Say Hello' />

            <div className='flex sm:flex-col items-center justify-between'>
                <div className='flex flex-col gap-1'>
                    <p className='text-tertiary text-sm'>{'{'}</p>
                    {Object.keys(user).map((key) => (
                        <p className='ml-5 text-sm'>
                            <span className='text-tertiary'>{key} :</span>  <span className='text-tertiary'>{user[key]}</span>
                        </p>
                    ))}
                    <p className='text-tertiary text-sm'>{'}'}</p>
                </div>
                <div className='h-[400px]'>
                    <lottie-player src="https://assets8.lottiefiles.com/packages/lf20_eroqjb7w.json" background="transparent" speed="1" autoplay></lottie-player>

                </div>

            </div>
        </div>
    )
}

export default Contact