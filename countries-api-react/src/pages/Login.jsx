import React from 'react'

function Login () {
  return (
    <>
      <form
        className='border border-primary rounded'
        style={{
          margin: '5rem auto',
          width: '400px',
          display: 'grid',
          gap: '2rem',
          padding: '2rem'
        }}
      >
        <div className='form-group'>
          <h3 className='text-center m-0'>Login</h3>
        </div>
        <div>
          <input name='username' type='text' className='form-control' placeholder='Username' />
        </div>
        <div>
          <input name='password' type='password' className='form-control' placeholder='Password' />
        </div>
        <div>
          <button type='submit' className='w-100 btn btn-primary'>Login</button>
        </div>
      </form>
    </>
  )
}

export default Login
