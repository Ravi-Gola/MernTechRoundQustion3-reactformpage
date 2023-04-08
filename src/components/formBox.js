import React from 'react'

const formBox = () => {
  return (
    <>
    <div className='formbox'>
      <div className='imgSection'></div>
      <div className='formSection'>
      <div className=' p-2 bg-white rounded-top-1 position-relative' style={{width:"60%",height:"40px"}}>
        <span className='position-absolute start-2 text-warning' style={{fontSize:"small"}}>ALREADY MEMBERS</span>
        <span className='position-absolute end-0 text-secondary' style={{fontSize:"small"}}>need help?</span>
        </div>
        <div className='form rounded-bottom-1'>
             <form action='/'>
                <input type="text"  class="form-control" placeholder="Enter your Username" aria-label="name" id="name" name="name" /><br/>
                <input type='password' class="form-control" placeholder="Enter your password" aria-label="pass" id="password" name="password"/><br/>
                <button class="btn btn-dark w-100" type="submit">Sign in</button>
             </form>
        </div>
        <div className='newUser'>
            <p className='text-white m-0'>Don't have an account yet?</p>
            <a type='button' href='/' className='text-dark'>your account</a>
        </div>
      </div>
    </div>
    </>
  )
}

export default formBox
