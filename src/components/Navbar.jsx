import React from 'react'
// import logo from "../assets/Yg.png"
import {FaLinkedin} from "react-icons/fa"
import {FaGithub} from "react-icons/fa"
import {FaSquareXTwitter} from "react-icons/fa6"

const Navbar = () => {
  return (
     <nav className=" mb-20 flex items-center justify-between py-6">
     <div className="flex flex-shrink-0 items-center">
     </div>
     <div className="m-8 flex items-center justify-center gap-4 text-2xl"  >
      <a href="https://www.linkedin.com/in/yash-gupta-1146131ba/" target='_blank' rel ="noopener noreferrer">
        <FaLinkedin/>
      </a>
      <a href ="https://github.com/YashGuptadev21" target = "_blank" rel ="noopener noreferrer">
        <FaGithub/>
        </a>
        <a href="https://x.com/yash21091_" target='_blank' rel='noopener noreferrer'>
        <FaSquareXTwitter/>
        </a>
     </div>
     </nav>
  )
}

export default Navbar