import './App.css';
import AddUser from "./AddUser/AddUser";
import User from './GetUser/User';
import UpdateUser from './UpdateUser/Update';
import {createBrowserRouter, RouterProvider} from "react-router-dom"

function App() {
  const route = createBrowserRouter([
    {
      path:"/",
      element:<User/>,
    },
    {
      path:"/add",
      element:<AddUser/>,
    },
    {
      path:"/update/:id",
      element:<UpdateUser/>,
    }
  ])
  return (
    <div className="App">
     <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
