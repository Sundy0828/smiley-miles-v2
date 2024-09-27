import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import NotFound from "./pages/notFound/NotFound";
import About from "./pages/about/About";
import { ThemeProvider } from "./components/provider/theme/ThemeProvider";
import Home from "./pages/home/Home";
import Calendar from "./pages/calendar/Calendar";
import Results from "./pages/results/Results";
import Year from "./pages/results/year/Year";
import Race from "./pages/results/year/race/Race";
import Sale from "./pages/sale/Sale";
import Videos from "./pages/videos/Videos";
import Notes from "./pages/notes/Notes";
import { BannerProvider } from "./components/banner/BannerContext";

// Define your routes
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ThemeProvider>
        <BannerProvider>
          <App />
        </BannerProvider>
      </ThemeProvider>
    ),
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "calendar",
        element: <Calendar />,
      },
      {
        path: "results",
        children: [
          {
            index: true,
            element: <Results />,
          },
          {
            path: ":year",
            children: [
              {
                index: true,
                element: <Year />,
              },
              {
                path: ":race",
                element: <Race />,
              },
            ],
          },
        ],
      },
      {
        path: "sale",
        element: <Sale />,
      },
      {
        path: "videos",
        element: <Videos />,
      },
      {
        path: "notes",
        element: <Notes />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
