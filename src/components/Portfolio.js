import React from "react"
import { PortfolioData } from "./Data"
import PortfolioCard from "./portfolioCards"

export default function Portfolio() {
  return (
    <div className="flex flex-col justify-center items-center text-left bg-black  py-4 px-40">
      <div className="py-20">
        <p className="text-5xl font-semibold text-white">Portfolio</p>
      </div>
      <div className="w-full bg-grey rounded-xl shadow-lg">
        <PortfolioCard data={PortfolioData} />
      </div>
    </div>
  )
}
