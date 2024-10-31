import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="flex items-center justify-between py-3 bg-gray-800 text-gray-300 px-10">
      <h2 >
          LoGo
      </h2>
        <nav className=" flex items-center justify-center gap-5">
          <Link to={'/'}>Home</Link>
          <Link to={'/users'}>Users</Link>
          <Link to={'/blogs'}>Blog</Link>
          <Link to={'/about'}>About</Link>
          <Link to={'/contact'}>Contact</Link>
        </nav>
    </div>
  )
}
