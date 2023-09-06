import React from 'react'

import img from '../assets/new/car.png'
import img1 from '../assets/new/instagram 1.png'
import img2 from '../assets/new/profile (2) 1.png'
import img3 from '../assets/new/Vector 123.png'
import img4 from '../assets/new/images (11) 1.png'
import img5 from '../assets/new/image 1.png'
import img6 from '../assets/new/image 2.png'
import img7 from '../assets/new/image 3.png'



const Dj = () => {
  return (
    <>

    <div className='bg-black m-10'>

        <p className='text-white font-bold flex'>Event Information/ Facilities</p>
        <p className='text-white'>Join us for a hands-on Travel experience and immerse yourself in the journey of exploration  ! Immerse yourself in breathtaking landscapes, embrace the challenge of hiking through rugged terrains, and witness the wonders of nature up close. Whether you're an experienced trekker or a novice explorer, our carefully curated trips provide a perfect blend of exhilaration, cultural immersion, and natural beauty.</p>
        <p className='font-bold flex'>What You wil Learn</p>
        <p>1. Cultural Awareness: Traveling and trekking expose you to different cultures, traditions, and ways of life. You can learn about the customs, rituals, and history of various communities and gain a deeper appreciation for cultural diversity.
            <br /> 2. Language Skills: Interacting with locals during your travels can improve your language skills. Learning basic phrases or even attempting to communicate in the local language enhances your ability to connect with people from different backgrounds.</p>
        <p className='text-white font-bold flex'>Target Audience</p>
        <p>People who love to travel and wants an adventurous experience which can be safe and well planned. what we provide is safe and well structured events. People who wants travel as an experience .</p>

        <div className='grid grid-cols-4 gap-80 my-5'>
            <div className='bg-pink-600 rounded-lg'>
               <center><img src={img} alt="" /></center> 
            </div>
            <div className='bg-pink-600 rounded-lg'>
               <center><img src={img3} alt="" /></center> 
            </div>
            <div className='bg-pink-600 rounded-lg'>
               <center><img src={img2} alt="" /></center> 
            </div>
            <div className='bg-pink-600 rounded-lg'>
               <center><img src={img1} alt="" /></center> 
            </div>
        </div>

        <div className='bg-white grid grid-cols-2 gap-10 rounded-lg'>
                <div>
                        <img src={img4} alt="" />
                </div>
                <div className='text-black m-auto'>
                <center><p className='font-bold my-10'>Instructors</p></center>
                <p>Our talented Instructor, Maria Rossi, is a native Italian with years of experience in the touring industry. With a deep knowledge of climbing and trekking and a passion for sharing her expertise, Maria will guide you through the art of travel.</p>
                </div>
        </div>
        <div className='bg-pink-600 p-5 my-5'>
                <p className='flex'>Pricing</p>
                <p className='flex'>
                    1.Single Registration: $60 per person <br /> </p>
                    <p className='flex'>
                    2.Group Registration (4 or more participants): $50 per person <br /> <br />Note: All Guides and pamplets will be provided.</p>
        </div>

         <p className='font-bold text-xl my-5'>SPONSERS</p>

         <div className='grid grid-cols-3 gap-80 my-5'>
            <div className='bg-white rounded-lg'>
               <center><img src={img7} alt="" /></center> 
            </div>
            <div className='bg-white rounded-lg'>
               <center><img src={img6} alt="" /></center> 
            </div>
            <div className='bg-white rounded-lg'>
               <center><img src={img5} alt="" /></center> 
            </div>
            
        </div>

        <p className='text-white font-bold flex my-5'>Contact Information:</p>
        <p className='flex'>
For any inquiries or additional information, please contact us at:Email: Kevents32@gmail.comPhone: 5993032290</p>

    </div>
    </>
  )
}

export default Dj
