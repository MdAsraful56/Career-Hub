import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router';
import { RouterProvider } from 'react-router';
import RootLayout from './Layouts/RootLayout/RootLayout';
import Home from './components/Home/Home';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
          <Route index element={<Home />} />
      </Route>
    )
  )
  return (
    <RouterProvider router={router} />
  )
}
export default App