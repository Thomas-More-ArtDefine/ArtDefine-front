import { Link, useNavigate } from "react-router-dom";
import login_mobile from "../../assets/images/login-mobile-img.png";

export default function Register() {
    const navigate = useNavigate();
    
    return (
        <>
        <div className="flex direction-column align-center">
            <div className="login-img"><img src={login_mobile} alt="" /></div>
        <div className="login-container">
            <h2>Register</h2>
            <div className='input font eaves heavy'>
                <label htmlFor="Email">Email</label>
                <input id='Email' required name="Email" type="text" placeholder='Example@ArtDefine.be' />
            </div>
            <div className='input font eaves heavy'>
                <label htmlFor="Username">Username</label>
                <input id='Username' required name="Username" type="text" placeholder='Username' />
            </div>
            <div className='input font eaves heavy'>
                <label htmlFor="password">Password</label>
                <input id='password' required name="password" type="password" placeholder='**********' />
            </div>
            <div className='input font eaves heavy'>
                <label htmlFor="password">Repeat Password</label>
                <input id='password' required name="password" type="password" placeholder='**********' />
            </div>
            <div className="links">
                <Link to='/login'>Already have an account?</Link> 
            </div>
            
            <div className="flex justify-center">
                <button onClick={()=>{navigate('/feed')}}>Register</button>
            </div>
            
        </div>
        </div>

        </>
    );
}