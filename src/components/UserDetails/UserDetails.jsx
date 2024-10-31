import { useLoaderData } from "react-router-dom"

export default function UserDetails() {
    const user = useLoaderData();
    console.log(user);
    
    const {id,name,username,address,email,phone,website,company} = user;
  return (
    
    <div>
        <h1 className="text-4xl font-bold text-center">UserDetails:</h1>
        <div className="mt-10 text-center bg-blue-700 text-white p-5 rounded-xl">
            <h2>User No: {id}</h2>
            <h1>Name: {name}</h1>
            <h1>User name: {username}</h1>
            <h1>Address: {address.street}</h1>
            <h1>Email: {email}</h1>
            <h1>Phone: {phone}</h1>
            <h1>Company: {company.name}</h1>
            <h1>Website: {website}</h1>
            
        </div>
    </div>
  )
}
