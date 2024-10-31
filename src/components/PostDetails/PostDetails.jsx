import { useLoaderData } from "react-router-dom"

export default function PostDetails() {
    const post = useLoaderData();
    console.log(post);
    
    const {id,title,body,userId} = post;
  return (
    <div>
        <h1 className="text-4xl font-bold text-center">UserDetails:</h1>
        <div className="mt-10 text-center bg-blue-700 text-white p-5 rounded-xl">
            <h2 className="text-2xl font-bold uppercase">Post No: {id}</h2>
            <h2>User Id: {userId}</h2>
            <h1 className="font-bold uppercase my-5">{title}</h1>
            <p >{body}</p>
            
            
        </div>
    </div>
  )
}
