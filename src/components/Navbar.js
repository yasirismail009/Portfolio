import React from "react"
import Logo from "../assets/img/Yasir.svg"

export default function Navbar() {
  return (
    <div className="flex flex-wrap justify-center items-center text-center bg-black w-full py-4 px-40">
      <div className="w-1/4 cursor-pointer">
        <img src={Logo} alt="Yasir Ismail" width="65" height="65" />
      </div>
      <div className="cursor-pointer flex px-6 flex-row w-3/4 justify-between ">
        <p className="cursor-pointer text-white text-lg font-semibold">
          Skills
        </p>
        <p className="cursor-pointer text-white text-lg font-semibold">
          Portfolio
        </p>
        <p className="cursor-pointer text-white text-lg font-semibold">About</p>
        <p className="cursor-pointer text-white text-lg font-semibold">
          Experience
        </p>
        <div className="cursor-pointer flex justify-center text-center items-center border rounded-full px-5 bg-white">
          <p className="text-lg font-semibold ">Contact</p>
        </div>
      </div>
    </div>
  )
}
