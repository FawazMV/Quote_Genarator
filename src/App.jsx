import { createBrowserRouter, Outlet } from 'react-router-dom';
import Navbar from './Pages/Layouts/Navbar';
import BookMarks from './Pages/Bookmarks/Bookmarks';
import HomePage from './Pages/HomePage/HomePage';
import ErrorPage from './Pages/Layouts/ErrorPage'
import Screen from './Pages/Layouts/Screen';
import store from './utils/Redux/store';
import { Provider } from 'react-redux';

const Applayout = () => {
  return (
    <>
      <Provider store={store}>
        <Navbar />
        <Screen>
          <Outlet />
        </Screen>
      </Provider>
    </>
  )
};



const App = createBrowserRouter([
  {
    path: '/',
    element: <Applayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/bookmarks', element: <BookMarks /> },
    ],
  },
]);

export default App;
