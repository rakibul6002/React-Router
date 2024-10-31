import { useLoaderData } from "react-router-dom"
import User from "../User/User";

export default function Users() {
  const user = useLoaderData();

  
  return (
    <div >
      <div className="text-5xl text-center">Total Users: {user.length}</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-5  ">
        {
          user.map((user)=><User key={user.id} user={user}></User>)
        }
      </div>
    </div>
    
  )
}
