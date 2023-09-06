
import './App.css'
import { Outlet, Link } from "react-router-dom";
import Footer from './components/Footer';
import Header from './components/Header';

import { atom, useAtom } from 'jotai'
import Trekking from './components/Trekking';
import Nav from './components/Nav';

export const gtitle = atom("")
export const gsubtitle = atom("")
export const gbackground = atom("1")
function App() {

  return (
    <>
      {/* <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <p>
        <Link to={ "home" }>Home</Link>{ " " }
        <Link to={ "nothome" }>Not Home</Link> { " " }
        <Link to={ "/" }>/</Link>
      </p> */}
      <Header />
 
      <Trekking/>
      <Footer />
    </>
  )
}

export default App
