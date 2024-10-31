import { useLoaderData, useNavigate, useParams } from "react-router-dom"

export default function PostDetails() {
    const post = useLoaderData();
    const navigate = useNavigate();
    const {blogId} = useParams();
    

    const handleGoBack = () =>{
        navigate(-1)
    }
    
    const {title,body,userId} = post;
  return (
    <div>
        <h1 className="text-4xl font-bold text-center">UserDetails:</h1>
        <div className="flex flex-col mt-10 text-center bg-blue-700 text-white p-5 rounded-xl">
            <div className="flex-grow">
                <h2 className="text-2xl font-bold uppercase">Post No: {blogId}</h2>
                <h2>User Id: {userId}</h2>
                <h1 className="font-bold uppercase my-5">{title}</h1>
                <p >{body}</p>
            </div>
            <div className="text-center mt-3">
                <button onClick={handleGoBack} className="btn w-48 ">Go Back</button>
            </div>
            
        </div>
        
    </div>
  )
}
