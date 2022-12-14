import React from 'react'

const WorkCard = (props) => {
    return (
        <div style={{ backgroundImage: `url(${props.image})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

            {/* Hover Effect */}
            <div className='opacity-0 group-hover:opacity-100'>
                <span className='text-2xl pl-3 font-bold text-white tracking-wider'>
                    {props.appName}
                </span>
                <div className='pt-8 text-center'>
                    <a href="/">
                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 hover:bg-black hover:text-white font-bold text-lg'>Demo</button>
                    </a>
                    <a href="/">
                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 hover:bg-black hover:text-white font-bold text-lg'>Code</button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default WorkCard