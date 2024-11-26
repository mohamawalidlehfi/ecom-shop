import React, { useState } from 'react'
import { Link ,useNavigate} from 'react-router-dom';
import { useRegisterUserMutation} from '../redux/features/auth/authApi';
const Register = () => {
    const [massage , setMassage ] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [registerUser ,{isLoading}] = useRegisterUserMutation();
    const navigate = useNavigate();    
    const handleRegister = async (e) => {
        e.preventDefault();
        const data = { username ,email, password }
        try{

            await registerUser(data).unwrap();
            alert("Registration successful")
            navigate("/login")

           } catch (error){
            setMassage("Registration failed")
           }
    }
  return (
    <div>
       <section className='h-screen flex items-center justify-center'>
      <div className='max-w-sm border shadow bg-white mx-auto p-8'>
        <h2 className='texr-2xl font-semibold pt-5'>Please Register</h2>
        <form onSubmit={handleRegister} className='space-y-5 max-w-sm mx-auto pt-8'>
            <input type="text" name="username" id="username" 
                onChange={(e) => setUsername(e.target.value)}
                placeholder='Username' required    
                className='w-full bg-gray-100 focus:outline-none px-5 py-3' 
            />
            <input type="email" name="email" id="email" 
                onChange={(e) => setEmail(e.target.value)}
                placeholder='Email Adderss' required    
                className='w-full bg-gray-100 focus:outline-none px-5 py-3' 
            />
            <input type="password" name="password" id="password"   
                onChange={(e) => setPassword(e.target.value)} 
                placeholder='Password' required
                className='w-full bg-gray-100 focus:outline-none px-5 py-3' 
            />
            {
                massage && <p className='text-red-500 text-sm'>{massage}</p>
            }
            <button type='submit' className='w-full bg-blue-500 text-white px-5 py-3
             rounded-md hover:bg-blue-800'>Register</button>
        </form>
         <p className='my-5 italic text-sm text-center'>Have an account? Please <Link to =
             "/Login"> <span className='text-red-500 px-1 underline'>Login </span> </Link>Here.
         </p>
      </div>
    </section>
    </div>
  )
}

export default Register
