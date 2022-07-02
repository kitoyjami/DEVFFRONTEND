import { Navigate, useRoutes } from 'react-router-dom'

// pages
import Login from './pages/Login'
import Register from './pages/Register'

// components

const Paths = () => {
  const element = useRoutes([
    {
      path: '/',
      element: <Navigate to='/login' replace />
    },
    {
      path: '/login',
      element: <Login />
    },
    {
        path: '/register',
        element: <Register />
    },
    {
      path: '/404',
      element: <p className='text-center'>Page not found</p>
    },
    {
      path: '*',
      element: <Navigate to='/404' replace />
    }
  ])

  return element
}

export default Paths
