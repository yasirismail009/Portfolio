import React from "react"

export default function SkillsCard({ data }) {
  return (
    <div className="w-full flex flex-col justify-center items-center text-center p-10">
      <div className="w-full text-white text-2xl font-semibold pb-6">
        {data.MainTitle}
      </div>
      <div className="w-full p-6 flex justify-between items-end">
        {data.data.map((val, key) => (
          <div
            key={key}
            className="w-1/4 p-6 rounded flex flex-col justify-center items-center  hover:bg-black active:bg-gray-700 focus:outline-none focus:ring focus:ring-violet-300"
          >
            <img src={val.img} alt="skills" style={{ height: "70px" }} />
            <p className="text-white text-xl font-semibold">{val.title}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
