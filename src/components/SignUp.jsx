import React from 'react'
import LockRoundedIcon from "@mui/icons-material/LockRounded";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from 'react-router-dom';
import '../styles/signup.css'



const SignUp = () => {

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); // Navigates to the previous page
  };

  return (
    <>
      <div className='Home flex m-10 justify-evenly items-center'>
        <div className='first-half ml-16'>
          <div className='logo flex items-center font-bold gap-1'>
            <img src="./src/images/logo.png" alt="logo" className='w-6' /> <h1 className='text-sm'> Whisper Zone</h1>
          </div>
          <div className='mt-5'>
            <button onClick={goBack}><i className='bx bx-left-arrow-alt text-3xl'></i></button>
          </div>
          <div className='hero-section mt-6'>

            <h4 className='font-medium text-3xl'>Register</h4>
            <p className='text-sm opacity-50 mt-3'>Please register to login</p>
          </div>

          <div className='email-inputs mt-10 flex flex-col gap-4'>

            <div className="input-">
              <span className="icon absolute ml-6 mt-2 opacity-70">
              <i className='bx bxs-user text-xl'></i>
              </span>
              <input type="email" name="email" id="email" placeholder='Email' className='p-3 border-2 text-sm border-grey-800 rounded-full w-96' />
            </div>


            <div className="input-container">
              <span className="icon absolute ml-6 mt-2 opacity-70">
              <i className='bx bxs-phone text-xl'></i>
              </span>
              <input type="tel" name="mobile" id="mobile" placeholder=' Mobile number' className='p-3 border-2 text-sm border-grey-800 rounded-full w-96' />
            </div>

            <div className="input-container">
              <span className="icon absolute ml-6 mt-2 opacity-70">
                <i className='bx bxs-lock-alt text-xl'></i>
              </span>
              <input type="password" name="password" id="password" placeholder='Password' className='p-3 border-2 text-sm border-grey-800 rounded-full w-96' />
            </div>


            <button type="submit" className='text-center text-sm   text-white bg-black rounded-full p-3 w-96 '> Sign Up</button>
          </div>


          <div className="flex justify-center gap-1 text-xs items-center mt-7">
            <p className=" text-black-200 opacity-50" >Already have an acount?</p>
            <a href="/SignIn" className="">Sign in</a>
          </div>
        </div>


        <div className='second-half bg-black rounded-3xl p-20 pl-16 pr-16'>
          <img src="./src/images/illustrations/Vector.png" className='ill-1' alt="illustration01" />
        </div>
      </div>
    </>
  )
}

export default SignUp;