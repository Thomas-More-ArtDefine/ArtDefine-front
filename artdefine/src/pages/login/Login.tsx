import { Link, useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();
    
    return (
        <>
        <div className="login-container">
            <h2>Login</h2>
            <div className='Username input font eaves heavy'>
                <label htmlFor="email">Email</label>
                <input id='email' required name="email" type="text" placeholder='Example@ArtDefine.be' />
            </div>
            <div className='Password input font eaves heavy'>
                <label htmlFor="password">Password</label>
                <input id='password' required name="password" type="password" placeholder='**********' />
            </div>
            <div className="links">
               <Link to='/login/forgot-password'>Forgot password?</Link>
                <Link to='/login/register'>Don't have an account yet?</Link> 
            </div>
            
            <div className="flex justify-center">
                <button onClick={()=>{navigate('/feed')}}>Login</button>
            </div>
            
        </div>
         

        </>
    );
}