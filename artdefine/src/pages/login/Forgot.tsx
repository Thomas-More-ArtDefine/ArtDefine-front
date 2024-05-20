import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function ForgotPassword() {
    const navigate = useNavigate();
    const [currentStep, setCurrentStep] = useState('email');
    
    return (
        <>
        <div className="login-container">
            <h2>Forgot Password</h2>
            {currentStep === 'email' && <><div className='input font eaves heavy'>
                <label htmlFor="email">Email</label>
                <input id='email' required name="email" type="text" placeholder='Example@ArtDefine.be' />
            </div>
            
            <div className="flex justify-center">
                <button onClick={()=>{setCurrentStep('code')}}>Send code</button>
            </div></>}
            {currentStep === 'code' && <><div className='input font eaves heavy'>
                <label htmlFor="code">Code</label>
                <input id='code' required name="code" type="text" placeholder='1234-5678' />
            </div>
            
            <div className="flex justify-center">
                <button onClick={()=>{setCurrentStep('password')}}>Submit</button>
            </div></>}
            {currentStep === 'password' && <><div className='input font eaves heavy'>
                <label htmlFor="Password">Password</label>
                <input id='Password' required name="Password" type="password" placeholder='******' />
            </div>
            <div className='input font eaves heavy'>
                <label htmlFor="Repeat">Repeat Password</label>
                <input id='Repeat' required name="Repeat" type="password" placeholder='******' />
            </div>
            
            <div className="flex justify-center">
                <button onClick={()=>{navigate('/login')}}>Submit</button>
            </div></>}
        </div>
         

        </>
    );
}