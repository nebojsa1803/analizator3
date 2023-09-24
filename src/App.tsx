import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { About, Register, Landing, Error, Login, HomeLayout } from './pages'
import { action as registerAction } from './pages/RegisterAction'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: 'about',
        element: <About />,
      },

      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'register',
        element: <Register />,
        action: registerAction,
      },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
