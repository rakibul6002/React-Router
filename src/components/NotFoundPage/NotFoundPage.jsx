import { Link, useRouteError } from "react-router-dom"

export default function NotFoundPage() {
    const error = useRouteError();
  return (
    <div >
        <div className=" min-h-screen my-auto bg-gray-800 text-gray-200 flex flex-col items-center justify-center ">
            <h2 className="text-5xl font-bold">OOPS!</h2>
            <p className="text-3xl font-bold my-3">{error.status}</p>
            {/* <i>{error.statusText || error.message}</i> */}
            <div>
                {
                    error.status === 404 && <div>
                        <h3 className="text-xl font-bold">Page Not Found</h3>
                    </div>
                }
            </div>
            <Link to={'/'}><button className="btn mt-5">Go To Home</button></Link>
        </div>
    </div>
  )
}
