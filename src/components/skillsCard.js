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
            className="w-1/4 flex flex-col justify-center items-center"
          >
            <img src={val.img} alt="skills" style={{ height: "70px" }} />
            <p className="text-white text-xl font-semibold py-2">{val.title}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
