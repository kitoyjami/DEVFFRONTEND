import { Navigate, useRoutes } from 'react-router-dom'
// PAGES
import Login from './pages/Login'
import App from './pages/App'

// Components
import Country from './components/Country'
import Countries from './components/Countries'
const Paths = () => {
  const element = useRoutes([
    {
      path: '/',
      element: <Navigate to='/login' />
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/countries',
      element: <App />,
      children: [
        {
          element: <Countries />,
          index: true
        },
        {
          path: 'country/:name',
          element: <Country />
        }
      ]
    },
    {
      path: '/404',
      element: <div className='text-center'>Page not found</div>
    },
    {
      path: '*',
      element: <Navigate to='/404' replace />
    }
  ])
  return element
}
export default Paths
