import React from "react"
import Yasir from "../assets/img/Yasir.svg"
import Profile from "../assets/img/2.png"
import Behance from "../assets/img/be.svg"
import Viemo from "../assets/img/v.svg"
import Lottie from "../assets/img/lo.svg"
import Linkedin from "../assets/img/in.svg"

export default function Footer() {
  return (
    <div className="flex flex-col justify-center items-center text-left bg-black  px-40">
      <div className="bg-grey w-full rounded-xl p-8">
        <div className="w-full  grid grid-cols-3 gap-12">
          <div>
            <img src={Yasir} alt="logo" style={{ width: "20%" }} />
          </div>
          <div className="flex justify-center items-center">
            <a href="https://www.behance.net/yasirIsmail_1" target="_blank">
              <div className="rounded-full bg-white  px-6 py-2 h-auto">
                <img src={Behance} alt="" width="40" />
              </div>
            </a>
            <a href="https://vimeo.com/ydesigns" target="_blank">
              <div className="rounded-full bg-white px-8 py-2  h-auto ml-4">
                <img src={Viemo} alt="" width="30" />
              </div>
            </a>
            <a
              href="https://iconscout.com/contributors/muhammad-yasir-ismail"
              target="_blank"
            >
              <div className="rounded-full bg-white px-8 py-2 h-auto ml-4">
                <img src={Lottie} alt="" width="30" />
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/yasir-ismail-5143b3164/"
              target="_blank"
            >
              <div className="rounded-full bg-white px-8 py-2  h-auto  ml-4">
                <img src={Linkedin} alt="" width="30" />
              </div>
            </a>
          </div>
        </div>
        <p className="text-center text-white m-0 font-semibold">
          Copyright © 2022 M Yasir Ismail.
        </p>
      </div>
    </div>
  )
}
