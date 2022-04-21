import { Button } from "@material-ui/core"
import React from "react"

export default function PortfolioCard({ data }) {
  return (
    <div className="w-full flex flex-col justify-center items-center text-center p-10">
      <div className="w-full p-6 flex justify-between items-end">
        {data.data.map((val, key) => (
          <div
            key={key}
            className="w-1/4 p-6 rounded flex flex-col justify-center items-center  bg-black rounded-xl"
          >
            <div className="w-full text-white text-2xl font-bold pb-24">
              {val.title}
            </div>
            <img
              src={val.img}
              alt="skills"
              className="pb-24"
              style={{ height: "300px" }}
            />
            <button className="text-white bg-gray-700  hover:bg-gray-900 text-xl font-semibold rounded p-2">
              Explore More
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
