import React, { useState } from 'react'
import {FiSun} from "react-icons/fi"
import {BsMoonStars} from "react-icons/bs"

type Props ={
  judul: string
}

const Navbar = (props:Props) => {
  const [toggle, setToggle] = useState<boolean>(true)

  return (
    <div className="navbar bg-base-100 border-b-[1px] border-black sticky top-0">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl font-Abril font-black">{props.judul}</a>
      </div>
      <div className="flex-none">
        {
          toggle ?
        <button className="btn btn-square btn-ghost" onClick={() => setToggle(!toggle)}>
          <FiSun className='w-5 h-5'/>
        </button> :
        <button className="btn btn-square btn-ghost" onClick={() => setToggle(!toggle)}>
          <BsMoonStars className='w-5 h-5'/>
        </button>
        }
      </div>
    </div>
  )
}

export default Navbar