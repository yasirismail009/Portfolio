import React from "react"
import Profile from "../assets/img/2.png"
import Behance from "../assets/img/be.svg"
import Viemo from "../assets/img/v.svg"
import Lottie from "../assets/img/lo.svg"
import Linkedin from "../assets/img/in.svg"

export default function Landning() {
  return (
    <div className="flex flex-wrap justify-center items-center text-left bg-black w-full h-screen pb-40 px-40">
      <div className="w-2/4 -mt-20">
        <div className="px-8">
          <p className="text-white text-3xl">I am</p>
          <p className="text-white text-6xl font-semibold pb-3">
            Muhammad Yasir Ismail
          </p>
          <p className="text-white text-2xl mb-8">
            Graphics Designer, Web Developer and Motion Graphics Expert
          </p>
          <div className="cursor-pointer flex justify-center text-center items-center border rounded-full px-5 py-2 bg-white">
            <p className="font-semibold text-lg">Explore Portfolio </p>
          </div>
        </div>
      </div>
      <div className="w-2/4 flex flex-row justify-center items-center -mt-10">
        <div>
          {" "}
          <img src={Profile} alt="Yasir" style={{ maxWidth: "130%" }} />
        </div>
        <div>
          <div className="rounded-full bg-white p-4 py-5 h-auto mb-4">
            <img src={Behance} alt="" width="200" />
          </div>
          <div className="rounded-full bg-white p-5  h-auto mb-4">
            <img src={Viemo} alt="" width="200" />
          </div>
          <div className="rounded-full bg-white p-4 py-4 h-auto mb-4">
            <img src={Lottie} alt="" width="200" />
          </div>
          <div className="rounded-full bg-white p-4 py-4 h-auto">
            <img src={Linkedin} alt="" width="200" />
          </div>
        </div>
      </div>
    </div>
  )
}
