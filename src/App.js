
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');  // whether dark mode is enable or not 
  const [alert, setAlert] = useState(null);   // Alert to show dark mode is enabled 
  
  const showAlert=(message, type) =>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{     //set timer to disable the alert
      setAlert(null);
    }, 1500);
  }

  const toggleMode=() =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode enabled", "success")
      document.title='TextUtils - Dark Mode';    //Displaying message on title of web page
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode enabled", "success")
      document.title='TextUtils - Light Mode';
    }
  }

  
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <>
          <Navbar title="Textutils" about='About' mode={mode} toggleMode={toggleMode} />
          {/* <Alert alert={alert} /> */}
          <Outlet />
        </>
      ),
      children: [
        {
          path: "TextForm",
          element: <TextForm showAlert={showAlert} heading="Enter the text to analyse below" mode={mode} />,
        },
        {
          path: "About",
          element: <About />,
        },
      ],
    },
  ]);

  return (
    // '<>' jxs fragment is used while there are multiple components
    <>
    {/* <Navbar  /> */}
    
    {/* <Navbar title="Textutils" about='About' mode={mode} toggleMode={toggleMode} /> */}

    <RouterProvider router={router} />
    <Alert alert={alert} />

    </>
  );
}

export default App;
