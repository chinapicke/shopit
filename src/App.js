import './App.css';
import {Route} from 'react-router-dom';
import Homepage from './Pages/Homepage';
import About from './Pages/About';
import RootLayout from './Layout/rootLayout';
import {createBrowserRouter } from 'react-router-dom';
import {createRoutesFromElements } from 'react-router-dom';
import {RouterProvider } from 'react-router-dom';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path ='/' element={<RootLayout/>}>
      <Route index element={<Homepage />} />
      <Route path="/about" element={<About />} />
    </Route>
  )
)

function App() {
  return (
      <RouterProvider router={router}/>
  );
}

export default App;
