import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";

const Blog = ({post}) => {
    const {title,id} = post;
    const navigate = useNavigate();

    const handleShowDetailsNavigate= () =>{
        navigate(`/blog/${id}`);
    }
    return (
        <div className=" flex flex-col mt-10 text-center bg-blue-700 text-white p-5 rounded-xl">
            <div className="flex-grow">
                <h1 className="text-3xl font-bold uppercase">Post No: {id}</h1>
                <p className="font-bold uppercase my-5">{title}</p>
            </div>
            <Link to={`/blog/${id}`}><button className="btn">See Details</button></Link>
            <button onClick={handleShowDetailsNavigate} className="btn bg-gray-800 text-gray-300 mt-5 hover:text-gray-800">Show Details BY Navigate</button>
        </div>
    );
};

export default Blog;
Blog.propTypes={
    post: PropTypes.object
}