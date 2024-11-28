import * as React from "react";
import * as ReactDOM from "react-dom/client";
import App from "./App";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { Trips  } from "./components/trips/Trips";
import  TripDetails   from "./components/trips/TripDetails";
import Home from "./pages/Home";
import ErrorPage from "./components/error-page";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    // <Route path="/" element={<App/>} errorElement={<ErrorPage />}>
    <Route path="/" element={<App/>}> 
    <Route index element={<Home />} />
      <Route path="trips" element={<Trips />} errorElement={<ErrorPage/>}> {/* // ErrorPage is shown under the Header in the App */}
        <Route path=":tripId" element={<TripDetails />} />
      </Route>
      <Route path="/about" element={<About/>} errorElement={<ErrorPage/>}/>  
      <Route path="/contact" element={<Contact/>} errorElement={<ErrorPage/>}/>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);
