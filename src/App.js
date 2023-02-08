
import { RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';
import { routes } from './Routes/Routes';

function App() {
  return (
    <div className="max-w-[1200px] mx-auto">
     <RouterProvider router= {routes}></RouterProvider>
    </div>
  );
}

export default App;
