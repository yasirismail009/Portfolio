import React from "react"
import { Web, Graphics, Motion } from "./Data"
import SkillsCard from "./skillsCard"

export default function Skills() {
  return (
    <div className="flex flex-col justify-center items-center text-left bg-black  py-4 px-40">
      <div className="py-20">
        <p className="text-5xl font-semibold text-white">Skills</p>
      </div>
      <div className="w-full bg-grey rounded-xl shadow-lg">
        <SkillsCard data={Web} />
        <SkillsCard data={Graphics} />
        <SkillsCard data={Motion} />
      </div>
    </div>
  )
}
