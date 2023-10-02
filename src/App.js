/** @format */

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Popup from "./Popup";
import Landing from "./pages/Landing";
import LoginPage from "./pages/Login";
import VideoRepository from "./pages/VideoRepository";
import SingleVideo from "./pages/SingleVideo"; 

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "video-repository",
        element: <VideoRepository />,
        children: [
          {
            path: ":videoId", 
            element: <SingleVideo />,
          },
        ],
      },
      {
        path: "popup",
        element: <Popup />,
      },
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router}>
      <div className="bg-[#F4F6F8] h-screen">
    
      </div>
    </RouterProvider>
  );
}

export default App;
