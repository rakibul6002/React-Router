import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Blog = ({post}) => {
    const {title,id} = post;
    return (
        <div className=" flex flex-col mt-10 text-center bg-blue-700 text-white p-5 rounded-xl">
            <div className="flex-grow">
                <h1 className="text-3xl font-bold uppercase">Post No: {id}</h1>
                <p className="font-bold uppercase my-5">{title}</p>
            </div>
            <Link to={`/blog/${id}`}><button className="btn">See Details</button></Link>
        </div>
    );
};

export default Blog;
Blog.propTypes={
    post: PropTypes.object
}