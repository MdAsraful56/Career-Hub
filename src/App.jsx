import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router';
import { RouterProvider } from 'react-router';
import RootLayout from './Layouts/RootLayout/RootLayout';
import Home from './components/Home/Home';
import ErroePage from './components/ErroePage/ErroePage';
import JobDetails from './components/JobDetails/JobDetails';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path='/job/:id' loader={()=> fetch(`../jobs.json`)} element={<JobDetails />} />
        <Route index errorElement={<ErroePage />} />
      </Route>
    )
  )
  return (
    <RouterProvider router={router} />
  )
}
export default App