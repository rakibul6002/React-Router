import {  NavLink } from "react-router-dom";
import './Header.css'

export default function Header() {
  return (
    <div className="flex items-center justify-between py-3 bg-gray-800 text-gray-300 px-10">
      <h2 >
          LoGo
      </h2>
        <nav className=" flex items-center justify-center gap-5">
          <NavLink to={'/'}>Home</NavLink>
          <NavLink to={'/users'}>Users</NavLink>
          <NavLink to={'/blogs'}>Blog</NavLink>
          <NavLink to={'/about'}>About</NavLink>
          <NavLink to={'/contact'}>Contact</NavLink>
        </nav>
    </div>
  )
}
