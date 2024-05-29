import  React from 'react';
import Navbar from './components/Navbar';
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Home from './Pages/Home';
import Login from './components/Login'
import User from './components/User';
import "./App.css";
import Container from './components/Container';

function App() {
  const router=createBrowserRouter([

    {
      path:"/",
      element: <><Navbar/><Home/></>
    },

      {
        path:"/login",
      element: <><Navbar/><Login/> </>
      },
      {
        path:"/user/:username",
      element: <><Navbar/><User/> </>
      }
  ])
  

  return (
    
    <div className="App">
   
    <RouterProvider router={router}/>
    <Container/>
   
    </div>
  );
}

export default App;
