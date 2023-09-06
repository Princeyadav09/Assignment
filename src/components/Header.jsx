import React from 'react'
import Bg3 from '../assets/bg3.png'
import Bg1 from '../assets/bg1.png'
import Bg2 from '../assets/bg2.png'
import Bg4 from '../assets/bg4.png'
import Bg5 from '../assets/bg5.png'
import Bg6 from '../assets/bg6.png'
import Nav from './Nav'
import { gtitle as gt, gsubtitle as gst, gbackground as gb } from '../App'
import { useAtom } from 'jotai'
import "./Header.css"

const getBackgroundImage = (bgVariable) => {
    switch (bgVariable) {
        case '1':
            return Bg1;
        case '2':
            return Bg2;
        case '3':
            return Bg3;
        case '4':
            return Bg4;
        case '5':
            return Bg5;
        default:
            return Bg6; // Default background if bgVariable doesn't match any case
    }
};

const Header = () => {
    const [title, setTitle] = useAtom(gt)
    const [subtitle, setSubtitle] = useAtom(gst)
    const [bg, setBg] = useAtom(gb)

    // console.log(title)

    return (
        <>
            {/* <div>Header</div> */ }
            <div className="font-[Cinzel]  h-screen text-xl" style={ {
                backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 1) 1%, rgba(0, 0, 0, 0) 30%), url(${getBackgroundImage(bg)})`,
                // backgroundAttachment: 'fixed',
                top: 0,
                backgroundRepeat: "no-repeat"
                ,
                backgroundSize: "cover"
                // backgroundImage: ""
            } }>
                <div className=" p-4 ">
                    <nav>
                        <Nav />
                    </nav>
                    <div className="flex justify-evenly items-center mt-[15vh] md:mt-[30vh]">
                        <div className=""></div>
                        <div className=" flex flex-col items-center">
                            <h1 className="h1 text-5xl font-bold ">
                                { title }
                            </h1>
                            <h2 className="h2 text-4xl font-bold mt-8" >
                                { subtitle }
                            </h2>
                            <div className="mt-8">
                                <button className='m-2 btn p-3 ' >Free Tickets</button>
                                <button className='m-2 btn p-3'>Weekly Events</button>

                            </div>
                            {/* with the gradient background */ }
                            <button className=' mt-4 text-3xl block border-gradient bg-gradient-to-r from-[#D807FA] to-[#FF0CBB] text-white px-6 py-4 rounded-xl font-bold'>Grab Your Tickets Now</button>
                        </div>
                    </div>

                </div>

            </div >

        </>
    )
}

export default Header