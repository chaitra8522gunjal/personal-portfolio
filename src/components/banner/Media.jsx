import React from 'react'
import { FaGithubSquare , FaInstagramSquare , FaLinkedinIn, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiHtml5 , SiNodedotjs  } from "react-icons/si";
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
            <FaGithubSquare />
            </span>
            <span className="bannerIcon">
            <FaInstagramSquare />
            </span>
            <span className="bannerIcon">
              <FaLinkedinIn />
            </span>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
            <SiNodedotjs />
            </span>
            <span className="bannerIcon">
              <SiTailwindcss />
            </span>
            <span className="bannerIcon">
            <SiHtml5 />
            </span>
          </div>
        </div>
      </div>
  )
}

export default Media