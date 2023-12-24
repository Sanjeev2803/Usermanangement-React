
import './App.css';
import Rootlayout from './components/Root'
import { createBrowserRouter,Navigate,RouterProvider } from 'react-router-dom';
import About from './components/About';
import Technology from './components/Technology';
import NodeTech from './components/NodeTech';
import VueTech from './components/VueTech';
import AngularTech from './components/AngularTech';
import Login from './components/Login';
import Register from './components/Register';
import UserProfile from './components/UserProfile';
import Home from './components/Home'
function App() {
  const router=createBrowserRouter([
    {
      path:'',
      element:<Rootlayout/>,
      children:[
        {
          path:'/',
          element:<Home/>
        },
        {
        path:'Login',
        element:<Login/>
        },
        {
          path:"UserProfile",
          element:<UserProfile/>
        },

        {
         
          path:'Register',
          element:<Register/>
        },

        {
          path:"About",
          element:<About/>

        },
        {
          path:"Technologies",
          element:<Technology/>,
          children:[
            {
              path:"Node",
              element:<NodeTech/>
            },
            {
              path:"Vue",
              element:<VueTech/>
            },
            {
              path:"Angular",
              element:<AngularTech/>

            },
            {
              path:"",
              element:<Navigate to='Node'/>
            }
          ]

        }
      ]
    }
  ]
  )
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
