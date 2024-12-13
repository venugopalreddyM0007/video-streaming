import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import Header from './components/Header';
import store from './utils/redux/AppSlice';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Maincontainer from './components/Maincontainer';
import Watch from './components/Watch';

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <Maincontainer />,
      },
      {
        path: "watch",
        element: <Watch />
      }
    ]
  }

])

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <h1 className='text-3xl'>home</h1> */}
        <Header />
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
