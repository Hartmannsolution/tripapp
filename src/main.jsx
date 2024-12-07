import * as React from "react";
import * as ReactDOM from "react-dom/client";
import App from "./App";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { Trips  } from "./components/trips/Trips";
import  TripDetails   from "./components/trips/TripDetails";
import Guides from "./pages/Guides";
import Home from "./pages/Home";
import ErrorPage from "./components/error-page";
import Error404Page from "./pages/Error404Page";
import ProtectedRoute from "./components/ProtectedRoute";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App/>}> 
    <Route index element={<Home />} />
      <Route path="trips" element={<Trips />} errorElement={<ErrorPage/>}> {/* // ErrorPage is shown under the Header in the App */}
        <Route path=":tripId" element={<ProtectedRoute allowedRoles="user"><TripDetails/></ProtectedRoute>} />
      </Route>
      <Route path="/about" element={<About/>} errorElement={<ErrorPage/>}/>  
      <Route path="/guides" element={<ProtectedRoute allowedRoles="admin"><Guides/></ProtectedRoute>} errorElement={<ErrorPage/>}/>  
      <Route path="/contact" element={<Contact/>} errorElement={<ErrorPage/>}/>
      <Route path="*" element={<Error404Page />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);
