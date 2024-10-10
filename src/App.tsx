import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import routeConstants from "./Constant/routeConstants.ts";
import BaseLayout from "./Components/Layout/BaseLayout.tsx";
import { Home, PageNotFound, Search, ShowDetail, Shows } from "./Screens/index.ts";
import { theme } from "./Styles/theme/theme.ts";
import { GlobalStyles } from "./Styles/global/GlobalStyles.ts";

//separate routes configuration

const routes = createBrowserRouter([
  {
    path: routeConstants.HOME,
    element: <BaseLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: routeConstants.SHOWS,
        element: <Shows />,
      },
      {
        path: `${routeConstants.SHOWS}/:id`,
        element: <ShowDetail />,
      },
      {
        path: routeConstants.SEARCH,
        element: <Search />,
      },
    ],
  },
  {
    path: "*",
    element: <PageNotFound   />,
  }
]);

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
          <GlobalStyles />
          <RouterProvider router={routes} />
      </ThemeProvider>
    </>
  );
}

export default App;
