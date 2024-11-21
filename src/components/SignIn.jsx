import react from 'react'
import '../styles/signin.css'

const SignIn = () => {
  return (
    <div className="">
      <div className='Home flex m-10 justify-evenly items-center'>
        <div className='first-half ml-16'>
          <div className='logo flex items-center font-bold gap-1'>
            <img src="./src/images/logo.png" alt="logo" className='w-6'/> <h1 className='text-sm'> Whisper Zone</h1>
          </div>
          <div className='hero-section mt-6'>
            <h4 className='font-medium text-3xl'>Hey There, <br /> Start sending Anonymous <br /> messages here!</h4>
            <p className='text-sm opacity-50 mt-3'>Enter your email address to use the app</p>
          </div>

          <div className='email-inputs mt-10 flex flex-col gap-4'>  
            <input type="email" name="email" id="email" placeholder='Learning group@gmail.com' className='p-3 border-2 text-sm border-grey-800 rounded-full w-96' />
            <button type="submit" className='text-center text-sm   text-white bg-black rounded-full p-3 w-96 '>Sign in with Email</button>
          </div>      

          <p className='text-sm opacity-50 text-center mt-8'>OR</p>

          <div className='sign-in-with mt-8 flex flex-col gap-4'>
            <button type="submit" className='text-center border-2 text-sm border-grey-800 text-black rounded-full p-3 w-96 flex justify-center gap-3'> <img src="./src/images/google.png" alt="google" className='w-5'/> Sign in with Google</button>
            <button type="submit" className='text-center border-2 text-sm border-grey-800 text-black rounded-full p-3 w-96 flex justify-center gap-3'> <img src="./src/images/apple.png" alt="apple" className='w-5'/>  Sign in with Apple</button>
            <button type="submit" className='text-center border-2 text-sm border-grey-800 text-black rounded-full p-3 w-96 flex justify-center gap-3'> <img src="./src/images/facebook.png" alt="facebook" className='w-5' /> Sign in with Facebook</button>
          </div>
          <div className="flex justify-center gap-1 text-xs items-center mt-7">
            <p className=" text-black-200 opacity-50" >Don't have an acount?</p>
            <a href="/SignUp" className="">Register Now</a>
          </div>
        </div>         
       

        <div className='second-half bg-black rounded-3xl p-20 pl-16 pr-16'>
            <img src="./src/images/illustrations/Partnership in security and safeguarding.png"  className='ill-1' alt="illustration01" />
            </div>
            </div>
    </div>
  )
}

export default SignIn;
