import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './components/Pages/Home';
import Aboutme from './components/Pages/Aboutme';
import Contactme from './components/Pages/Contactme';
import { useEffect, useState } from 'react';
import Pulsing from './components/Animations/Pulsing';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='/about-me' element={<Aboutme />} />
      <Route path='/contact-me' element={<Contactme />} />
    </Route>
  )
)

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const rootApp = document.querySelector(".root-app-container");
    let timeoutID;

    timeoutID = setTimeout(() => {
      setIsLoading(false)
      rootApp.classList.add("pop-out")
    }, 3000)

    return () => {
      clearTimeout(timeoutID)
    }
  }, [])

  return (
    <>
      {
        isLoading && <Pulsing />
      }
      <div className='root-app-container'>
        {
          !isLoading && <RouterProvider router={router} />
        }
      </div>
    </>
  );
}

export default App;