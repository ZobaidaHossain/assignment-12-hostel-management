import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import {
  QueryClient,
  QueryClientProvider,
  
} from '@tanstack/react-query'

const queryClient = new QueryClient()
import Main from './layout/Main';
import Home from './pages/Home/Home';
import AuthProvider from './providers/AuthProvider';
import Login from './joinUs/Login';
import Register from './joinUs/Register';
import Menu from './pages/Menu/Menu';
import Meals from './pages/Meals/Meals';
import Details from './pages/Menu/Details';
import PrivateRoute from './Routes/PrivateRoute';
import Dashboard from './layout/Dashboard';
import Cart from './Dashboard/Cart';
import AllUsers from './Dashboard/AllUsers';
import AddItems from './Dashboard/AddItems';
import AdminRoute from './Routes/AdminRoute';
import ManageItems from './Dashboard/ManageItems';
import UpdateItem from './Dashboard/UpdateItem';
import Payment from './Dashboard/Payment';
import PaymentHistory from './Dashboard/PaymentHistory';
import Upcoming from './Dashboard/Upcoming';
import AddUp from './Dashboard/AddUp';
import Up from './pages/Meals/Up';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/signin',
        element:<Login></Login>
      },
      {
        path:'/signup',
        element:<Register></Register>
      },
      {
        path:'/order',
        element:<Menu></Menu>
      },
      {
        path:'meals',
        element:<Meals></Meals>

      },
      {
        path:'up',
        element:<Up></Up>

      },
      {
        path:'meals/details/:id',
        element:<Details></Details>,
        loader:()=>fetch(' https://hostel-management-server-sand.vercel.app/menu/')
      }
    ]
  },
  {
    path:'dashboard',
    element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children:[
      {
        path:'cart',
        element:<Cart></Cart>
      },
      {
        path: 'payment',
        element: <Payment></Payment>
      },
      {
        path: 'paymentHistory',
        element: <PaymentHistory></PaymentHistory>
      },

      {
path:'addItems',
element:<AdminRoute><AddItems></AddItems></AdminRoute>
      },
      {
        path:'addupcoming',
        element:<AdminRoute><AddUp></AddUp></AdminRoute>
              },
              {
                path:'upcoming',
                element:<AdminRoute><Upcoming></Upcoming></AdminRoute>
                      },
      // {
      //   path: 'details/:id', // Adjust the path to match your requirement
      //   element: <Details></Details>,
      //   loader: ({ params }) => fetch(`https://hostel-management-server-sand.vercel.app/menu/${params.id}`),
      // },
      //admin routes
      {
        path:'users',
        element:<AdminRoute><AllUsers></AllUsers></AdminRoute>
      },
      {
        path:'manageItems',
        element:<AdminRoute><ManageItems></ManageItems></AdminRoute>
      },
      {
        path:'updateItem/:id',
        element:<AdminRoute><UpdateItem></UpdateItem></AdminRoute>,
        loader:({params})=>fetch(`https://hostel-management-server-sand.vercel.app/menu/${params.id}`)
        
              },
    ]
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <QueryClientProvider client={queryClient}>
    <div className='max-w-screen-xl mx-auto'>
    <RouterProvider router={router} />
    </div>
    </QueryClientProvider>
    
    </AuthProvider>
   
   
  </React.StrictMode>,
)
