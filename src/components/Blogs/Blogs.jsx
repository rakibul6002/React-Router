import { useLoaderData } from "react-router-dom"
import Blog from "../Blog/Blog";

export default function Blogs() {
    const post = useLoaderData();
  
  return (
    <div>
        <h1 className="text-4xl font-bold text-center">Blog Post:</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-5  ">
            {
                post.map((post)=><Blog key={post.id} post={post}></Blog>)
            }
        </div>
    </div>
  )
}
