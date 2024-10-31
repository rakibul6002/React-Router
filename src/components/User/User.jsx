import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
export default function User({user}) {

    const {id,name,email,phone} = user;
  return (

    <div className='bg-blue-700 text-white p-5 rounded-xl flex flex-col'>
      <div className='flex-grow'>
        <h2>User No: {id}</h2>
        <h2>Name: {name}</h2>
       
        <h4 className='text-sm'>Email: {email}</h4>
        
        <p className='text-xs'>Phone No: {phone}</p>
      </div>
      <Link to={`/user/${id}`} className='text-center' ><button className='btn mt-5 '>Show Details</button></Link>
    </div>

  )
}
 User.propTypes={
    user: PropTypes.object
 }